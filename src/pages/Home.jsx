import { useLoaderData } from "react-router-dom"
import Country from "./Country"
import Hero from "./Hero"
import SpotsGallary from "./SpotsGallary"
import Sports from "../Spots/Sports"



const Home = () => {


 
  const spots =useLoaderData()
console.log(spots)
  return (
    <div>
          

    <Hero></Hero>
    {/* <SpotsGallary></SpotsGallary> */}
    <Country></Country>
    <h1 className="text-3xl font-extrabold my-10 text-center">Our Toriuist Section</h1>
<div className=" md:grid grid-cols-2 mt-10 space-y-8">
{
    spots.map(spot => <Sports key={spot._id} spot={spot}></Sports>)
   }
</div>
    </div>
  )
}

export default Home
