let productos =[
    {nombre: 'laptop', categoria: 'tecnologia', precio: 1000},
    {nombre:'Smartphone', categoria:'tecnologia', precio: 600},
    {nombre:'camisa', categoria:'ropa', precio: 30},
    {nombre:'teclado', categoria:'tecnologia', precio: 50},
    {nombre:'zapatillas', categoria:'ropa', precio: 80}
]

function filtrarProductosPorCategoria(productos ,categorias) {
    return productos.filter(producto => categorias.includes(producto.categoria));
}

function calcularDescuento (productos, descuento) {
    let productosDescuento = productos.forEach(producto => {
        let descuentoTotal = descuento / 100
        return producto.precio * descuentoTotal
    });

    return productosDescuento;
}


function sumarproductos (productos) {
    let suma = productos.reduce((total, producto) => total + producto.precio, 0);
    return suma;
}


let productosFiltrados = filtrarProductosPorCategoria(productos, 'tecnologia')

let productosDescuento = calcularDescuento(productosFiltrados, 10)

let sumarProductos = sumarProductos(productosDescuento)