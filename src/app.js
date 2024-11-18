import express from "express";
import adminRoutes from "./routes/Admin/adminRoutes.js";
import productsRoutes from "./routes/Products/productsRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/products", productsRoutes);

export default app;