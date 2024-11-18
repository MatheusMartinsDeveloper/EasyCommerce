import { createProduct } from "../../services/Products/productsService.js";

async function create(request, response) {
    const productData = request.body;

    try {
        const sendProductData = await createProduct(productData);

        response.status(201).json(sendProductData);
    } catch (error) {
        response.status(401).json({ message: "Error in create controller", error: error.message });
    }
}

export default { create }