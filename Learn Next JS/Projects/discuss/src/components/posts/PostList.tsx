import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'
import { prisma } from '@/lib'
import Link from 'next/link'

type PostListProps = {
  fetchdata: () => Promise<PostWithData[]>
}

const PostList: React.FC<PostListProps> = async ({ fetchdata }) => {
  const posts = await fetchdata();

  // Wait for all topic lookups to resolve
  const postsWithTopic = await Promise.all(
    posts.map(async (post) => {
      const topic = await prisma.topic.findFirst({
        where: {
          posts: { some: { id: post.id } }
        }
      });
      return { post, topic };
    })
  );

  return (
    <div>
      {postsWithTopic.map(({ post, topic }) => (
        <Link
          key={post.id}
          href={`/topics/${topic?.slug || 'unknown'}/posts/${post.id}`}
        >
          <Card className="mb-3">
            <CardHeader>
              <CardTitle className="text-lg font-extrabold">
                {post.title}
              </CardTitle>
              <CardDescription>
                <div className="flex flex-row justify-between">
                  <h2 className="text-sm font-semibold">
                    By {post.user?.name}
                  </h2>
                  <h4 className="text-sm text-gray-500">
                    {post._count.comments} Comments
                  </h4>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
