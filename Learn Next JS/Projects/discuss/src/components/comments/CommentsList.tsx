import React from 'react'
import CommentShow from './CommentShow'
import { prisma } from '@/lib'
import { fetchCommentByPostId } from '@/lib/query/comment'
import { comment } from 'postcss'

type CommentListProps = {
    postId:string
}

const CommentsList: React.FC<CommentListProps> = async ({postId})=> {
    const comments = await fetchCommentByPostId(postId)
    const topLevelComments = comments.filter((comment)=>comment.parentId==null);

  return (
    <div>
        <h1 className='font-bold text-lg pt-5'>All 0 Comments</h1>
        {
            topLevelComments.map((comment)=>{
               return <CommentShow key={comment.id} postId={comment.postId} commentId={comment.id}/>
            })
        }
    </div>
  )
}

export default CommentsList