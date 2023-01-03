// Faz a validacao no banco de dados

import { prisma } from '@prisma/client';
import { hash } from 'bcryptjs';
import prismaClient  from '../../prisma/index';

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password} : UserRequest){
        
        if(!email){
            throw new Error("Email Incorrect")
        }
        // Busca no Banco de Dados se existem um email igual ja cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already Exists")
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            }, 
            select:{
                id: true,
                email: true,
                name: true,
            }
        })
        
        return user;
    }
}

export { CreateUserService };