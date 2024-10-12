const estudiante = {
    nombre : 'juan perez',
    edad : 20, 
    direccion : {
        ciudad : 'medellin',
        calle : 'calle 10',
        numero : 101
    },
    notas : {
        matematica : 4.5,
        ingles : 3.8,
        ciencias : 4.0
    }
}


let  {nombre , direccion :{ciudad} , notas :{matematica}} = estudiante

console.log(nombre, ciudad, matematica);
