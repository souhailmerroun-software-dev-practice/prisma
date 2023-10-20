import prismaClient from '../../../prisma/prisma-client';  

// GET all tasks
export async function GET(request: Request) {
    console.log('Request received', { method: request.method, url: request.url });
    const tasks = await prismaClient.task.findMany();
    return new Response(JSON.stringify(tasks), { headers: { 'Content-Type': 'application/json' } });
}