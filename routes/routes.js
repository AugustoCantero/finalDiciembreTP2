import { Router } from "express";
import ProductoDAO from "../dao/ProductoDAO.js";
import VentaDAO from "../dao/VentaDAO.js";
import ProductoService from "../services/ProductoService.js";
import VentaService from "../services/VentaService.js";
import ProductoController from "../controllers/ProductoController.js";
import VentaController from "../controllers/VentaController.js";

const router = Router();


const productoDAO = new ProductoDAO();
const ventaDAO = new VentaDAO();

const productoService = new ProductoService(productoDAO);
const ventaService = new VentaService(productoDAO, ventaDAO);

const productoController = new ProductoController(productoService);
const ventaController = new VentaController(ventaService);

router.post("/productos", productoController.registrarProducto);
router.get("/productos", productoController.listarInventario);

router.post("/ventas", ventaController.registrarVenta);

export default router;