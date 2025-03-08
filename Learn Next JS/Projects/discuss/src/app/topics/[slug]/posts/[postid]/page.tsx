import React, { Suspense } from "react";
import PostShow from "@/components/posts/PostShow";
import CommentCreateForm from "@/components/comments/CommentCreateForm";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommentsList from "@/components/comments/CommentsList";
type PostShowPageProps = {
  params: Promise<{slug:string; postid:string}>
};

const PostShowPage : React.FC<PostShowPageProps> = async ({params}) => {
  const {slug, postid} = await params;
  return (
    <div className="space-y-3">
      <Link href={`/topics/${slug}`}> 
        <Button>
          <ChevronLeft/> 
          Back to {`${slug}`}
        </Button>
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <PostShow postId={postid}/>
      </Suspense>
      <CommentsList postId={postid}/>
      <CommentCreateForm postId={postid}/>
    </div>
  )
}

export default PostShowPage