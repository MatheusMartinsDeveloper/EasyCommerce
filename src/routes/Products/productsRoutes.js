import express from "express";
import authorization from "../../middlewares/Admin/authorization.js";
import productsController from "../../controllers/Products/productsController.js";

const productsRoutes = express.Router();

productsRoutes.post("/createProduct", authorization, productsController.create);
productsRoutes.get("/getAllProducts", productsController.get);
productsRoutes.get("/getById/:id", productsController.getOne);
productsRoutes.put("/updateById/:id", authorization, productsController.updateOne);
productsRoutes.delete("/deleteById/:id", authorization, productsController.deleteOne);

export default productsRoutes;
