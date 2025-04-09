import { useLoaderData } from "react-router-dom"
import Sports from "./Sports"
import AllSpot from "./AllSpot"


const AllToruist = () => {
 const spotess = useLoaderData()
 
  return (
    <div>
        
      {
        spotess.map(spote => <AllSpot key={spote.id} spote={spote}></AllSpot>
          )
      }
    </div>
  )
}

export default AllToruist
