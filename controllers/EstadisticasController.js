class EstadisticasController {
    constructor(estadisticasService) {
        this.estadisticasService = estadisticasService;
    }

    obtenerTotalUnidadesVendidas = (req, res) => {
        const total = this.estadisticasService.totalUnidadesVendidas();
        res.status(200).json({ totalUnidadesVendidas: total });
    };

    obtenerUnidadesVendidasPorCategoria = (req, res) => {
        const resumen = this.estadisticasService.totalUnidadesVendidasPorCategoria();
        res.status(200).json(resumen);
    };
}

export default EstadisticasController;
