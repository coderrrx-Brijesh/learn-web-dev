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
import { createTopics } from "@/actions/create-topics"
import { useActionState } from "react"
export function TopicCreateForm() {
  const [formState, action]=useActionState(createTopics,{errors:{}})
   return (
    <Dialog>
      <DialogTrigger asChild>
      <Button>New Topic</Button>
      </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
      <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a topic</DialogTitle>
            <DialogDescription>
              Write a new topic to start discussion. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name">
                Name
              </Label>
              <Input id="name" name="name"/>
              {formState.errors.name && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">{formState.errors.name[0] && formState.errors.name[0] }
                 <br></br> {formState.errors.name[1] && formState.errors.name[1]}</div>}
            </div>
            <div>
              <Label htmlFor="description" >
                Description
              </Label>
              <Textarea id="description" name="description"/>
              {formState.errors.description && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">{formState.errors.description}</div>}
              {formState.errors.formError && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">{formState.errors.formError}</div>}
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

export default TopicCreateForm