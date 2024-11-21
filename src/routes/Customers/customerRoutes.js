import express from "express";
import customerController from "../../controllers/Customer/customerController.js";

const customerRoutes = express.Router();

customerRoutes.post("/createCustomer", customerController.create);

export default customerRoutes;