import { createProduct, getAllProducts } from "../../services/Products/productsService.js";

async function create(request, response) {
    const productData = request.body;

    try {
        const sendProductData = await createProduct(productData);

        response.status(200).json(sendProductData);
    } catch (error) {
        response.status(401).json({ message: "Error in create controller", error: error.message });
    }
}

async function get(request, response) {
    try {
        const products = await getAllProducts();

        response.status(200).json(products);
    } catch (error) {
        response.status(401).json({ message: "Error in get products", error: error.message });
    }
}

export default { create, get }