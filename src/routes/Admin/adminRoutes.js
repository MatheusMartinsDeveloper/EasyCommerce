import express from "express";
import adminController from "../../controllers/Admin/adminController.js";
import authenticate from "../../middlewares/Admin/authenticate.js";

const adminRoutes = express.Router();

adminRoutes.post("/createAdmin", authenticate, adminController.create);
adminRoutes.post("/loginAdmin", adminController.login);

export default adminRoutes;