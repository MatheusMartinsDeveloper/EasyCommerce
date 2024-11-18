import createAdmin from "../../services/Admin/adminService.js";

async function create(request, response) {
    const adminData = request.body;
    
    try {
        const newAdmin = await createAdmin(adminData);
        
        response.status(200).json(newAdmin);
    } catch (error) {
        response.status(401).json({ message: "Error in create admin", error: error.message });
    }
}

export default { create }