import express from "express";
import adminController from "../../controllers/Admin/adminController.js";

const adminRoutes = express.Router();

adminRoutes.post("/createAdmin", adminController.create);

export default adminRoutes;