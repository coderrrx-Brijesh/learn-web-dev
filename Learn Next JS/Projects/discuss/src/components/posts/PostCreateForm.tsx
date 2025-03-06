'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { createPosts } from "@/actions/create-posts"
import { useActionState } from "react"
export function PostCreateForm({topic}:{topic:string}) {
  const [formState, action]=useActionState(createPosts,{errors:{}})
   return (
    <Dialog>
      <DialogTrigger asChild>
      <Button>New Post</Button>
      </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
      <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a post</DialogTitle>
            <DialogDescription>
              Write a new post. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center">
              <Label className="flex items-center justify-center font-bold text-lg gap-3">
                Topic: 
                <Input id="topic" name="topic" defaultValue={topic} readOnly/>
              </Label>
            </div>
            <div>
              <Label htmlFor="tile">
                Title
              </Label>
              <Input id="title" name="title"/>
              {formState.errors.title && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">{formState.errors.title}</div>}
            </div>
            <div>
              <Label htmlFor="content" >
                Content
              </Label>
              <Textarea id="content" name="content"/>
              {formState.errors.content && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">
                {formState.errors.content}</div>}
              {formState.errors.formError && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">
                {formState.errors.formError}</div>}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">Save changes</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
  )
}

export default PostCreateForm