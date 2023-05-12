import Image from "next/image"
import Link from "next/link"
export const HomePage = ({data}) => {
  return (
    <div className="cards_container">
        {
        data?.map( (mem) => (
          <div key={mem.id} className="memory_card">
            <Link href={`/memories/${mem.id}`}>
            <div className="location_img">
              <Image width={0}
  height={0}
  sizes="100vw"
  style={{ width: '20%', height: '25%' }} alt={mem.title} src={mem.image}/>
            </div>
            <h2>{mem.title}</h2>
            <p>{mem.description}</p>
          </Link>
          </div>
          
        ))
      }
      </div>
  )
}
