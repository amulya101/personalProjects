import Image from "next/image"

export const Events= ({data}) => {
  return (
    <div>
        {
            data?.map( (mem) => (
                <a key={mem.id} href={`/memories/${mem.id}`}>
                  <Image width={200} height={200} alt={mem.title} src={mem.image}/>
                  <h2>{mem.title}</h2>
                </a>
              ))
        }
    </div>
  )
}
