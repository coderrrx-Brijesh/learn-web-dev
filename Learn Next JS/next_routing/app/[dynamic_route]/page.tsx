import React from 'react'

const page = ({params}: {params: {dynamic_route : string}}) => {
  const {dynamic_route} = params;
  return (
    <div>Hello {dynamic_route}</div>
  )
}

export default page