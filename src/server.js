import express from "express"
import { PrismaClient } from "@prisma/client";

const PORT = 3000;
const app = express();
const prisma = new PrismaClient();

async function main() {
    app.listen(PORT, () => {
        console.log(`Server Running in PORT:`, PORT);
    });
}

main()
    .catch((error) => {
        console.error(`Prisma Error:`, error);
        process.exit(1);
    })