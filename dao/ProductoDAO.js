class ProductoDAO {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    obtenerTodos() {
        return this.productos;
    }

    buscarPorId(id) {
        return this.productos.find(producto => producto.id === id);
            }
}

export default ProductoDAO;
