class VentaController {
    constructor(ventaService) {
        this.ventaService = ventaService;
    }

    registrarVenta = (req, res) => {
        try {
            const nuevaVenta = this.ventaService.registrarVenta(req.body);
            res.status(201).json(nuevaVenta);
        } catch (error) {
            res.status(400).json({ errorMsg: error.message });
        }
    };
}

export default VentaController;