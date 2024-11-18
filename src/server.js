import app from "./app.js";
import prisma from "./services/Prisma/prismaService.js";

const PORT = 3000;

async function main() {
    try {
        await prisma.$connect();
        console.log("Success to connect in database");
    } catch (error) {
        console.error(`Error to connect in database: ${error}`);
        process.exit(1);
    }

    app.listen(PORT, () => {
        console.log(`Server running in PORT: ${PORT}`);
    });
}

main().catch((error) => {
    console.error(`Error in init server: ${error}`);
    process.exit(1);
});