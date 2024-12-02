import Venta from "../models/Venta.js";

class VentaService {
    constructor(productoDAO, ventaDAO) {
        this.productoDAO = productoDAO;
        this.ventaDAO = ventaDAO;
    }

    registrarVenta({ idJuego, cantidad }) {
        const producto = this.productoDAO.buscarPorId(idJuego);
        if (!producto) {
            throw new Error("Producto no encontrado");
        }
        if (producto.cantidad < cantidad) {
            throw new Error("Stock insuficiente");
        }
        producto.cantidad -= cantidad;
        const venta = new Venta(idJuego, cantidad);
        this.ventaDAO.registrarVenta(venta);
        return venta;
    }
}

export default VentaService;
