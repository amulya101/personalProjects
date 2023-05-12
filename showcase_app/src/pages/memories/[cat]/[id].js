const { SingleMemory } = require("@/components/events/single-mem")

const Category = ({data}) => {
    return (
      <SingleMemory data={data}/>
      
    )
  }
  
  export default Category;

  export async function getStaticPaths(){

    const {allMemories} = await import('/data/data.json')

    const allPaths = allMemories.map((path) =>{
        return {
            params: {
                cat: path.city.toLowerCase(),
                id: path.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
  }

  export async function getStaticProps(context){

    const id = context.params.id; //context provides the params object created in getStaticPaths

    const { allMemories } = await import("data/data.json")

    const memoryData =  allMemories.find((mem) => (id === mem.id));

    return {
        props:{
            data: memoryData
        }
    }

  }