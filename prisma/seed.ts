import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function seed(){
    const user = await prisma.user.create({
        data:{
            name: "Antonio Alves",
            email: "antonio.alves@google.com",
            Task:{
                create:{
                    title:"Estudar Javascript",
                    "description":"Estudar javascript e resolver uma lista de exercicios"
                }
            }
        }
    });
}

seed();