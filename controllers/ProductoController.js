import ProductoService from "../services/ProductoService.js";

class ProductoController {
    constructor(productoService) {
        this.productoService = productoService;
    var a =0;
    registrarProducto = (req, res) => {
        try {
            const nuevoProducto = this.productoService.registrarProducto(req.body);
            res.status(201).json(nuevoProducto);
        } catch (error) {
            res.status(400).json({ errorMsg: error.message });
        }
    };

    listarInventario = (req, res) => {
        const inventario = this.productoService.listarInventario();
        res.status(200).json(inventario);
    };
}

export default ProductoController;