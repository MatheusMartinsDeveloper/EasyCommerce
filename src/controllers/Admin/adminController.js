import { createAdmin, loginAdmin } from "../../services/Admin/adminService.js";

async function create(request, response) {
    const adminData = request.body;
    
    try {
        const newAdmin = await createAdmin(adminData);
        
        response.status(200).json(newAdmin);
    } catch (error) {
        response.status(401).json({ message: "Error in create admin", error: error.message });
    }
}

async function login(request, response) {
    const { email, password } = request.body;

    try {
        const token = await loginAdmin({ email, password });

        response.status(201).json({ message: "Login Success!", token: token });
    } catch (error) {
        response.status(401).json({ message: "Login is failed!", error: error.message });
    }
}

export default { create, login }