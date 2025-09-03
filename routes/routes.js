import { Router } from "express";
import ProductoDAO from "../dao/ProductoDAO.js";
import VentaDAO from "../dao/VentaDAO.js";
import ProductoService from "../services/ProductoService.js";
import VentaService from "../services/VentaService.js";
import ProductoController from "../controllers/ProductoController.js";
import VentaController from "../controllers/VentaController.js";
import EstadisticasService from "../services/EstadisticasService.js";
import EstadisticasController from "../controllers/EstadisticasController.js";

const router = Router();


const productoDAO = new ProductoDAO();
const ventaDAO = new VentaDAO();

const productoService = new ProductoService(productoDAO);
const ventaService = new VentaService(productoDAO, ventaDAO);
const estadisticasService = new EstadisticasService(productoDAO, ventaDAO);
const estadisticasController = new EstadisticasController(estadisticasService);

const productoController = new ProductoController(productoService);
const ventaController = new VentaController(ventaService);
router.get("/estadisticas/total-unidades-vendidas", estadisticasController.obtenerTotalUnidadesVendidas);
router.get("/estadisticas/unidades-vendidas-categoria", estadisticasController.obtenerUnidadesVendidasPorCategoria);

router.post("/productos", productoController.registrarProducto);
router.get("/productos", productoController.listarInventario);

router.post("/ventas", ventaController.registrarVenta);

export default router;