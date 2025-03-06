import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'
type PostListProps={
  fetchdata : () => Promise<PostWithData[]>
}


const PostList : React.FC<PostListProps> = async({fetchdata}) => {
  const posts = await fetchdata();
  return (
    <div>
      {
        posts.map((post)=>{
          return (
            <Card key={post.id} className='mb-3'>
              <CardHeader>
                <CardTitle className='text-lg font-extrabold'>{post.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-row justify-between">
                      <h2 className="text-sm font-semibold">By {post.user?.name}</h2>
                      <h4 className="text-sm text-gray-500">{post._count.comments} Comments</h4>
                    </div>
                  </CardDescription>
              </CardHeader>
            </Card>
          )
        })
      }
    </div>
  )
}

export default PostList