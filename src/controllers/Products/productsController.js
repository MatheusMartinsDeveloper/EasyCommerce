import { createProduct, getAllProducts, getById, updateById, deleteById } from "../../services/Products/productsService.js";

async function create(request, response) {
    const productData = request.body;

    try {
        const sendProductData = await createProduct(productData);

        response.status(200).json(sendProductData);
    } catch (error) {
        response.status(400).json({ message: "Error in create controller", error: error.message });
    }
}

async function get(request, response) {
    try {
        const products = await getAllProducts();

        response.status(200).json(products);
    } catch (error) {
        response.status(400).json({ message: "Error in get products", error: error.message });
    }
}

async function getOne(request, response) {
    const { id } = request.params;

    try {
        const sendId = await getById(id);

        if (!sendId) {
            return response.status(400).json({ message: "Product not found!" });
        }
        
        response.status(200).json(sendId);
    } catch (error) {
        response.status(400).json({ message: "Error in get one product", error: error.message });
    }
}

async function updateOne(request, response) {
    const { id } = request.params;
    const newProductData = request.body;

    try {
        const sendId = await updateById(id, newProductData);

        if (!sendId) {
            return response.status(400).json({ message: "Product not found!" });
        }

        response.status(200).json(sendId);
    } catch (error) {
        response.status(400).json({ message: "Error in update one product", error: error.message });
    }
}

async function deleteOne(request, response) {
    const { id } = request.params;

    try {
        const sendId = await deleteById(id);

        if (!sendId) {
            return response.status(400).json({ message: "Product not found!" });
        }

        response.status(200).json(sendId);
    } catch (error) {
        response.status(400).json({ message: "Error in delete one product", error: error.message });
    }
}

export default { create, get, getOne, updateOne, deleteOne }