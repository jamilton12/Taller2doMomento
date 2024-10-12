const $fecha = document.querySelector('#fecha')
const $input = document.querySelector('#input')
const $enter = document.querySelector('#btn-enter')
const $lista = document.querySelector('#lista')

const check = 'fa-check-circle'
const uncheck= 'fa-circle'
const lineThrough = 'line-through'

let id 
let LIST

//fecha actaul
const fecha = new Date()
$fecha.innerHTML = fecha.toLocaleTimeString('es-CO', {weekday:'long', month:'short', day:'numeric'} )




//agregar nueva tarea 

function agregarTarea(tarea, id, realizado, eliminado) {
    if (eliminado){
        return
    }

    const REALIZADO = realizado ? check : uncheck
    const LINE = realizado ? lineThrough : ''

    const element = `<li id="elemento">
                        <i class="far ${REALIZADO} " data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="fas fa-trash de" id="${id}" data="eliminado"></i>
                    </li>
                    `

    $lista.insertAdjacentHTML('beforeend', element)
}

//check y linea de tarea realizada 

function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)

    const addLine = element.parentNode.querySelector('.text')
    addLine.classList.toggle(lineThrough)

    LIST[element.id].realizado = LIST[element.id].realizado ? false : true
}


//eliminar tarea

function tareaEliminada(element){
    const removeTarea = element.parentNode 
    removeTarea.parentNode.removeChild(removeTarea)

    LIST[element.id].eliminado = true
}

//evento de escucha para añadir una nueva tarea 

$enter.addEventListener('click',() => {
    const tarea = $input.value
    crearTarjeta(tarea)
})

document.addEventListener('keyup', function(event){
    if (event.key=== 'Enter'){
        const tarea = $input.value
        crearTarjeta(tarea)
    }   
})


//crear una nueva tarea

function crearTarjeta(tarea) {
        if (tarea){
            agregarTarea(tarea, id, false, false)
            LIST.push [{
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false,
            }]
        }
        localStorage.setItem('TODO',JSON.stringify(LIST))
        $input.value = ''
        id++
}




//evento de poner check y eliminar tareas 

$lista.addEventListener ('click', function(event){
    const element = event.target

    const elementData = element.attributes.data.value

    if (elementData === 'realizado'){
        tareaRealizada(element)
    }else if (elementData === 'eliminado'){
        tareaEliminada(element)
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
})


//local storage get item

let data = localStorage.getItem('TODO')

if (data){
    LIST= JSON.parse(data)
    id= LIST.length
    cargarLista(LIST)
}else {
    LIST = []
    id = 0
}


function cargarLista(DATA){
    DATA.forEach((i) => {
        agregarTarea(i.nombre, i.id, i.realizado, i.eliminado)
    });
}