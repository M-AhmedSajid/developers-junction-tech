import Image from 'next/image'
import React from 'react'

export default function Img({img, alt}) {
  return (
    <Image src={img} alt={alt} width={150} height={150} className='duration-300 hover:scale-110' />
  )
}
