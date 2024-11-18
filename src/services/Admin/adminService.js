import prisma from "../Prisma/prismaService.js";
import bcrypt from "bcrypt";

export default async function createAdmin(adminData) {
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
        console.error(`Error to try create new admin: ${error}`);
    }   
}