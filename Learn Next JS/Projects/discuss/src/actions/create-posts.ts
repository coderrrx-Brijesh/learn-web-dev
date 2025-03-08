"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib";
import { z } from "zod";
import { Post } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

type createPostState = {
  errors: {
    title?: string[];
    content?: string[];
    formError?: string[];
  };
};

export const createPosts = async (prevState: createPostState,formData: FormData): Promise<createPostState> => {
  const title = formData.get("title")?.toString() || "";
  const content = formData.get("content")?.toString() || "";
  const topic = formData.get("topic")?.toString() || "";
  const topicId = await prisma.topic.findUnique({
    where: { slug: topic },
    select: { id: true },
  });
  const session = await auth();

  if (!title || !content || !session?.user?.id || !topic) {
    return {
      errors: { formError: ["All fields are required."] },
    };
  }

  if (!topicId) {
    return {
      errors: { formError: ["Topic not found."] },
    };
  }

  const result = createPostSchema.safeParse({
    title,
    content,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let post: Post;
  try {
    post = await prisma.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topicId?.id,
      },
    });
} catch (error) {
    if (error instanceof Error) {
        return {
            errors: { formError: [error.message] },
        };
    } else {
        return {
            errors: { formError: ["Failed to create post"] },
        };
    }
}
    revalidatePath(`/topics/${topic}`);
    redirect(`/topics/${topic}/posts/${post.id}`);
};
