import prisma from "../Prisma/prismaService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function createAdmin(adminData) {
    const { password } = adminData;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newAdminData = { ...adminData, password: passwordHash };

    try {
        const admin = await prisma.admins.create({
            data: newAdminData
        });

        return admin;
    } catch (error) {
        throw Error(`Error to try create new admin: ${error}`);
    }   
}

export async function loginAdmin(adminData) {
    const { email, password } = adminData;

    const admin = await prisma.admins.findUnique({
        where: { email }
    });

    if (!admin) {
        throw Error("Admin not found!");
    }

    const comparePassword = await bcrypt.compare(password, admin.password);

    if (!comparePassword) {
        throw Error("Password is invalid!");
    }

    const token = jwt.sign(
        { userId: admin.id, email: admin.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    return token;
}