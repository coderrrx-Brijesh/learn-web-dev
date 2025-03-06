import React from "react";
import PostShow from "@/components/posts/PostShow";
import CommentCreateForm from "@/components/comments/CommentCreateForm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
type PostShowPageProps = {
  params: Promise<{slug:string; postId:string}>
};

const PostShowPage : React.FC<PostShowPageProps> = async ({params}) => {
  const {slug, postId} = await params;
  return (
    <div className="space-y-3">

      
      <Link href={`/topics/${slug}`}> 
        <Button>
          <ChevronLeft/> 
          Back to {`${slug}`}
        </Button>
      </Link>
      <PostShow postId={postId}/>
      <CommentCreateForm/>
    </div>
  )
}

export default PostShowPage