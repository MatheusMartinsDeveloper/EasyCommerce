import express from "express";
import adminRoutes from "./routes/Admin/adminRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/admin", adminRoutes);

export default app;