import SearchForm from '@/components/SearchForm';
import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/lib/utils'
import React from 'react'
import Card from '../../components/Card';
const page = () => {
  return (
    <>
        <div
      className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center
        justify-center rounded-lg"
        >
          <div className="absolute inset-0 w-full h-full  z-20 
          [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <h1 className={cn("heading relative")}>
           Welcome To Project Hub
          </h1>
          <p className="sub-heading !max-w-3xl relative">
            Project Hub is a place to share your projects.
          </p>
          <SearchForm/>
        </div>

        <section className='section_container'>
            <p className='text-30-semibold'> Trendy Projects</p>
            <ul className='mt-7 card_grid grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center'>
                {
                    [1,2,3,4,5,6].map((item,id)=>{
                        return(
                            <Card item={item} key={id}/>
                        )
                    })
                }
            </ul>
        </section>
    </>

  );
}

export default page