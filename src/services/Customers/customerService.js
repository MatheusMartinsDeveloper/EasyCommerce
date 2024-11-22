import prisma from "../Prisma/prismaService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function createCustomer(dataCustomer) {
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

export async function getAllCustomer() {
    try {
        const customers = await prisma.customers.findMany();

        return customers;
    } catch (error) {
        throw Error(`Error in get all customers: ${error}`);
    }
}

export async function getCustomer(id) {
    try {
        const findCustomer = await prisma.customers.findUnique({
            where: {
                id: id
            }
        });

        return findCustomer;
    } catch (error) {
        throw Error(`Error in get customer: ${error}`);
    }
}

export async function deleteCustomer(id) {
    try {
        const findDeleteCustomer = await prisma.customers.delete({
            where: {
                id: id
            }
        });

        return findDeleteCustomer;
    } catch (error) {
        throw Error(`Error in delete customer: ${error}`);
    }
}

export async function loginCustomer(customerData) {
    const { email, password } = customerData;
    
    try {
        const findCustomer = await prisma.customers.findUnique({
            where: {
                email: email
            }
        });

        if (!findCustomer) {
            throw Error("Customer not found!");
        }

        const comparePassword = await bcrypt.compare(password, findCustomer.password);

        if (!comparePassword) {
            throw Error("Password is invalid!");
        }

        const token = jwt.sign(
            { customer: findCustomer.name },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return token;
    } catch (error) {
        throw Error(`Error in login customer: ${error}`);
    }
}