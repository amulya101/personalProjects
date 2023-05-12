import { MemoryCat } from "@/components/events/mems-page";

const Categories = ({data, pageName}) => {
    return (
      <MemoryCat data={data} pageName={pageName} />
    )
  }

  export default Categories;

  export async function getStaticPaths(){
    const {memory_categories} = await import("/data/data.json");

    const allPaths = memory_categories.map(mem => {
        return {
            params: {
                cat: mem.id.toString()
            }
        }
    })

    console.log(allPaths)

    return {
       paths: allPaths,
       fallback: false
    }
  }

  export async function getStaticProps(context){
    
    const id = context?.params.cat;
    const { allMemories } = await import("data/data.json") //context provides the params object created in getStaticPaths
    
    const data = allMemories.filter(mem => mem.city.toLowerCase() === id);

    return {props: {
        data,
        pageName: id
    }};
  }