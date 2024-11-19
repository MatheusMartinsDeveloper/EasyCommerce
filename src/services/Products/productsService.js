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

export async function getById(id) {
    try {
        const product = await prisma.products.findUnique({
            where: {
                id: id
            }
        });

        return product;
    } catch (error) {
        throw Error(`Error in get by id: ${error}`);
    }
}

export async function updateById(id, newData) {
    try {
        const product = await prisma.products.update({
            where: {
                id: id
            },
            data: newData
        });
        
        return product;
    } catch (error) {
        throw Error(`Error in update by id: ${error}`);
    }
}

export async function deleteById(id) {
    try {
        const product = await prisma.products.delete({
            where: {
                id: id
            }
        });
        
        return product;
    } catch (error) {
        throw Error(`Error in delete by id: ${error}`);
    }
}