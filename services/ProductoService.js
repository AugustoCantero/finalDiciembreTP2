import Producto from "../models/Producto.js";

class ProductoService {
    constructor(productoDAO) {
        this.productoDAO = productoDAO;
    }

    registrarProducto({ nombre, categoria, precio, cantidad }) {
        if (!nombre || !categoria || precio <= 0 || cantidad < 0) {
            throw new Error("Los datos ingresados no son válidos");
        }
        const id = `prod-${Date.now()}`;
        const producto = new Producto(id, nombre, categoria, precio, cantidad);
        this.productoDAO.agregarProducto(producto);
        return producto;
    }

    listarInventario() {
        return this.productoDAO.obtenerTodos();
    }
}

export default ProductoService;
