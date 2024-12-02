class VentaDAO {
    constructor() {
        this.ventas = [];
    }

    registrarVenta(venta) {
        this.ventas.push(venta);
    }

    obtenerTodas() {
        return this.ventas;
    }
}

export default VentaDAO;
