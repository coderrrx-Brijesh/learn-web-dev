'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib'
import { revalidatePath } from 'next/cache'
import {z} from 'zod'

const createCommentSchema = z.object({
    content: z.string().min(1),
})

type createCommentState = {
    errors:{
        content?: string[];
        formError?: string[];
    }
}

export const createComment = async (postId: string, parentid: string, prevState: createCommentState, formData: FormData): Promise<createCommentState> => {
    const result = createCommentSchema.safeParse(formData)
    if(!result.success){
        return {errors: result.error.flatten().fieldErrors}
    }

    const session = await auth()

    if(!session || !session.user || !session.user.id){
        return {
            errors: {
                formError: ["Please sign in to comment"]
            }
        }
    }

    try{
        const comment = await prisma.comment.create({
            data: {
                content: result.data.content,
                postId:"1",
                userId: session.user.id,
                parentId:"2"
            }
        })
    }
    catch(error){
        if(error instanceof Error){
            return {
                errors: {
                    formError: [error.message]
                }
            }
        }
        else {
            return {
                errors: {
                    formError: ["Something went wrong"]
                }
            }
        }
    }
    const topic = await prisma.topic.findFirst({
        where: {
            posts:{some:{id:postId}}
        }
    })
    if(!topic){
        return {
            errors: {
                formError: ["Failed to revalidate path."]
            }
        }
    }
    revalidatePath(`topics/${topic.slug}/posts/${postId}`)
    return {
        errors:{}
    }
}