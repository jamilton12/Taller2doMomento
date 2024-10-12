const numeros = [5, 8, 12, 15, 2 , 4, 18, 21]

//multiplicar 

let numerosMult = numeros.map ((num)=> {
    return num * 2
})

console.log({numerosMult})

//filtrar 

let numerosFiltrados = numerosMult.filter((num)=> {
    return num > 10 
})

console.log({numerosFiltrados})


//suma filtrados 

let suma = numerosFiltrados.reduce((total, num) => total + num, 0)

console.log(suma)

//media
