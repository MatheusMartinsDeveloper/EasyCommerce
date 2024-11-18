import express from "express";
import authenticate from "../../middlewares/Admin/authenticate.js";
import productsController from "../../controllers/Products/productsController.js";

const productsRoutes = express.Router();

productsRoutes.post("/createProduct", authenticate, productsController.create);

export default productsRoutes;