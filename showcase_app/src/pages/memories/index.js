import { Events } from "@/components/events/all-events";

export default function Memories({data}){
    return (
      <Events data={data}/>
    )
}

export async function getStaticProps(){
    const {memory_categories} = await import("/data/data.json");
    return {
      props: {
        data: memory_categories
      }
    }
  }
  
  



