class EstadisticasService {
    constructor(productoDAO, ventaDAO) {
        this.productoDAO = productoDAO;
        this.ventaDAO = ventaDAO;
    }

    totalUnidadesVendidas() {
        const ventas = this.ventaDAO.obtenerTodas();
        return ventas.reduce((total, venta) => total + venta.cantidad, 0);
    }

    totalUnidadesVendidasPorCategoria() {
        const productos = this.productoDAO.obtenerTodos();
        const ventas = this.ventaDAO.obtenerTodas();

        const resumen = {};

        ventas.forEach((venta) => {
            const producto = productos.find((prod) => prod.id === venta.idJuego);
            if (producto) {
                if (!resumen[producto.categoria]) {
                    resumen[producto.categoria] = 0;
                }
                resumen[producto.categoria] += venta.cantidad;
            }
        });

        return resumen;
    }
}

export default EstadisticasService;
