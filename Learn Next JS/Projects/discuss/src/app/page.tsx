import { Button } from "../components/ui/button";
import { signIn } from "../actions/sign-in";
import { signOut } from "../actions/sign-out";
import {auth} from "../auth";
import TopicCreateForm from "../components/topics/TopicCreateForm";
import PostList from "@/components/posts/PostList";
import { fetchTopPost } from "@/lib/query/post";
export default async function Home() {
  const session = await auth();
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-bold m-2">Top Post</h1>
        <PostList fetchdata={() => fetchTopPost('top')}></PostList>
      </div>
      <div>
        <TopicCreateForm/>
      </div>
    </div>
  );
}
