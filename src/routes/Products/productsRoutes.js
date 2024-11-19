import express from "express";
import authenticate from "../../middlewares/Admin/authenticate.js";
import productsController from "../../controllers/Products/productsController.js";

const productsRoutes = express.Router();

productsRoutes.post("/createProduct", authenticate, productsController.create);
productsRoutes.get("/getAllProducts", productsController.get);
productsRoutes.get("/getById/:id", productsController.getOne);
productsRoutes.put("/updateById/:id", productsController.updateOne);
productsRoutes.delete("/deleteById/:id", productsController.deleteOne);

export default productsRoutes;