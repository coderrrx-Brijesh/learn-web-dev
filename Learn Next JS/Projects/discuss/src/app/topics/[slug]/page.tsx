import { Button } from '@/components/ui/button';
import React from 'react'
import {PostCreateForm} from '@/components/posts/PostCreateForm'
import PostList from '@/components/posts/PostList';
import { fetchPostByTopicSlug } from '@/lib/query/post';
type TopicShowPageProps = {
  params:Promise<{slug:string}>
}

const TopicShowPage : React.FC<TopicShowPageProps> = async({params}) => {
  const slug = (await params).slug;
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h1 className='text-xl font-bold m-2'>{slug.toUpperCase()}</h1>
        <PostList fetchdata = {()=> fetchPostByTopicSlug(slug)}/>
      </div>
      <div>
        <PostCreateForm topic={slug}/>
      </div>
    </div>
  )
}

export default TopicShowPage