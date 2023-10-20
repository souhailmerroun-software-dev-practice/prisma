// prisma/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

let prismaInstance: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prismaInstance = new PrismaClient();
} else {
    // Ensure that there's a single instance of `PrismaClient` throughout the app
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prismaInstance = global.prisma;
}

export default prismaInstance;
