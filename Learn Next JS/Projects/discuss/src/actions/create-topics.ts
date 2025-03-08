'use server'

import {z} from 'zod'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Topic } from '@prisma/client';
import { auth } from '@/auth';
import { prisma } from '@/lib';

const createTopicsSchema = z.object({
    name: z.string().min(3).regex(/^[a-z]+$/,{message:" Topic name must be in lowercase"}),
    description: z.string().min(10),
})

type createTopicFormState= {
    errors:{
        name?:string[],
        description?:string[],
        formError?:string[]
    }
}

export const createTopics = async (prevState: createTopicFormState, formData: FormData): Promise<createTopicFormState> =>{
    const name = formData.get('name');
    const description = formData.get('description');

    const parseRresult = createTopicsSchema.safeParse({name, description});

    if (!parseRresult.success) {
        return { 
            errors:parseRresult.error.flatten().fieldErrors
         };
    }
    
    const session =await auth();

    if(!session || !session.user){
        return {
            errors:{
                formError:["Please sign in to create a topic"]
            }
        }
    }

    let topic: Topic;
    try{
        topic = await prisma.topic.create({
            data:{
                slug:parseRresult.data.name,
                description:parseRresult.data.description,
            }
        })
    }
    catch(error){
        if(error instanceof Error){
            return {
                errors: {
                    formError:[error.message]
                }
            }
        }
        else{
            return{
                errors:{
                    formError:["Some internal server error"]
                }
            }
        }
    }
    revalidatePath ('/')
    redirect(`/topics/${topic.slug}`);
}