import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import properties from '../../public/properties.json'

export default function Page() {
  return (
    <div className='text-center flex flex-wrap gap-3 justify-center'>
      {properties.map((property) => (
        <div key={property.ID} className='bg-teal-800 text-amber-200 text-2xl items-center h-fit p-2 pt-0 border-2 border-teal-950'>
          <h1 className='lg:text-4xl p-2'>{property.Name}</h1>
          <Image src={property.Image} alt={property.Name} width={500} height={300} className='border-2 border-teal-950 -center'/>
          <p className='text-xl text-white mt-2'>{property.Address} - {property.Price}</p>
          <div className='flex justify-evenly mt-2'>
            <Link href={`/properties/${property.ID}`} className='text-white text-xl border-2 p-2 bg-teal-950'>View Property</Link>
            <Link href={`/properties/testimonials/${property.ID}`} className='text-white text-xl border-2 p-2 bg-teal-950'>View Testimonials</Link>
          </div>
        </div>
      ))}
    </div>
  )
}