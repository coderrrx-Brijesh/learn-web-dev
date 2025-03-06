'use client'
import React, { useActionState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { createComment } from '@/actions/create-comment'

type   CommentCreateFormProps = {
    postId:string,
    parentId:string,
    startOpen: boolean
}

const CommentCreateForm : React.FC<CommentCreateFormProps> = ({postId, parentId,startOpen}) => {
    const [open, setOpen] = React.useState(false)
    const [formState, action]=useActionState(createComment.bind(null, postId, parentId), {errors:{}})

  return (
    <div className='flex flex-col items-start gap-2 w-full'>
        <Button size={'sm'} variant={'link'} onClick={() => {setOpen(!open)}}>Reply</Button>
       {open && 
        <form action={action} className='flex gap-2 w-full'>
            <Textarea name='comment' placeholder="Write a comment..." className='bg-gray-100 focus-visible:ring-0'></Textarea>
            <Button size={'sm'} type='submit' variant={'secondary'}>Comment</Button>
        </form>}
    </div>
  )
}

export default CommentCreateForm