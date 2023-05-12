import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 

export const MemoryCat = ({data, pageName}) => {
  return (
    <div>
        <h1>
            Memories in {pageName}
        </h1>

        <div>
            {data?.map(eve => (
                <Link key={eve.id} href={`/memories/${eve.city.toLowerCase()}/${eve.id}`} passHref>
                    
                        <Image width={300} height={300} alt={eve.title} src={eve.image} />
                        <h2>{eve.description}</h2>
                    
                </Link>
            ))}
        </div>
    </div>
  )
}
