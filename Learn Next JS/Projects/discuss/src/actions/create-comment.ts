'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib'
import { revalidatePath } from 'next/cache'
import {z} from 'zod'

const createCommentSchema = z.object({
    content: z.string().min(3),
})

type createCommentState = {
    errors:{
        content?: string[];
        formError?: string[];
    }
}

export const createComment = async ({postId, parentId} : {postId: string, parentId?: string}, 
    prevState: createCommentState, formData: FormData): Promise<createCommentState> => {
        const result = createCommentSchema.safeParse({
            content: formData.get("content")?.toString(),
          });
          
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

    try {
        if (!postId) {
            return {
                errors: {
                    formError: ["Invalid post ID. Please try again."]
                }
            };
        }
    
        const comment = await prisma.comment.create({
            data: {
                content: result.data.content,
                post: { connect: { id: postId } }, // Ensures valid postId
                user: { connect: { id: session.user.id } },
                parent: parentId ? { connect: { id: parentId } } : undefined,
            },
        });
    } catch (error) {
        return {
            errors: {
                formError: [error instanceof Error ? error.message : "Something went wrong"],
            },
        };
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