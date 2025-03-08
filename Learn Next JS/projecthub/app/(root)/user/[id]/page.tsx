import React from 'react'
import ProfileCard from '../../../../components/ProfileCard'
import Card from  '../../../../components/Card'
const page = ({params} : {params : {id : string}}) => {
    const {id} = params
  return (
    <>
        <section className='profile_container mt-10'>
          <div className='flex flex-row justify-evenly gap-10'>
            <ProfileCard/>
            <div>
                <h1 className='text-30-semibold'>Projects</h1>
                <ul className='card_grid grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10 justify-center'>
                    {
                        [1,2,3,4,5,6].map((item,id)=>{
                            return(
                                <Card item={item} key={id}/>
                            )
                        })
                    }
                </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default page