'use client'
import React, { useActionState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { createComment } from '@/actions/create-comment'
import { Loader2 } from 'lucide-react'

type   CommentCreateFormProps = {
    postId:string,
    parentId?:string,
    startOpen?: boolean
}

const CommentCreateForm : React.FC<CommentCreateFormProps> = ({postId, parentId,startOpen}) => {
    const [open, setOpen] = React.useState(false)

    const [formState, action, isPending] = useActionState(
      createComment.bind(null, { postId, parentId }),
      { errors: {} }
    )

  return (
    <div className='flex flex-col items-start gap-2 w-full'>
        <Button size={'sm'} variant={'link'} onClick={() => {setOpen(!open)}}>Reply</Button>
       {open && 
        <form action={action} className='flex gap-2 w-full'>
          <div className='flex flex-col gap-2 w-full'>
            <Textarea name='content' placeholder="Write a comment..." className='bg-gray-100 focus-visible:ring-0'></Textarea>
            {formState.errors.content && <p className='text-red-500'>{formState.errors.content}</p>}
            {formState.errors.formError && <div className='text-red-500'>{formState.errors.formError}</div>}
          </div>
            <Button size={'sm'} disabled={isPending} type='submit' variant={'secondary'}>
              {
                isPending ? (<>
                  <Loader2/>
                  Please Wait
                </>):"Comment"
              }
            </Button>
        </form>}
    </div>
  )
}

export default CommentCreateForm