import express from "express";
import adminController from "../../controllers/Admin/adminController.js";
import authorization from "../../middlewares/Admin/authorization.js";

const adminRoutes = express.Router();

adminRoutes.post("/createAdmin", authorization, adminController.create);
adminRoutes.post("/loginAdmin", adminController.login);

export default adminRoutes;
