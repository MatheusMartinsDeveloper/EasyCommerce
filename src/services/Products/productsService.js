import prisma from "../Prisma/prismaService.js";

export async function createProduct(dataProduct) {
    try {
        const product = await prisma.products.create({
            data: dataProduct
        });

        return product;
    } catch (error) {
        throw Error(`Error in createProduct: ${error}`);        
    }
}

export async function getAllProducts() {
    try {
        const getProducts = await prisma.products.findMany();
        return getProducts;
    } catch (error) {
        throw Error(`Error in getAllProducts ${error}`);
    }
}