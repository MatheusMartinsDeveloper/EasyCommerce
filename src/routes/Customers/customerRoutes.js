import express from "express";
import customerController from "../../controllers/Customer/customerController.js";

const customerRoutes = express.Router();

customerRoutes.post("/createCustomer", customerController.create);
customerRoutes.get("/getAllCustomers", customerController.getAll);
customerRoutes.get("/getCustomer/:id", customerController.getOne);
customerRoutes.delete("/deleteCustomer/:id", customerController.deleteOne);
customerRoutes.post("/loginCustomer", customerController.login);

export default customerRoutes;