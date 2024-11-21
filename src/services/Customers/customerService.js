import prisma from "../Prisma/prismaService.js";
import bcrypt from "bcrypt";

export default async function createCustomer(dataCustomer) {
    try {
        const { password } = dataCustomer;

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newCustomer = await prisma.customers.create({
            data: {
                ...dataCustomer,
                password: passwordHash
            }
        });

        return newCustomer;
    } catch (error) {
        throw Error(`Error in create customer: ${error}`);
    }
}