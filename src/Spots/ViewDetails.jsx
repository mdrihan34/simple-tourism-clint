import { useLoaderData } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";

const ViewDetails = () => {
    const spots = useLoaderData()
    const { _id, image, spotName,countryName,location,description,cost,seasonality,travelTime,totalVisitors,userEmail,userName} = spots

  return (
    <div className="card lg:card-side bg-orange-50 shadow-xl ml-5 lg:ml-20 mr-20 md:pr-10 mt-5">
    <figure><img className="h-full" src={image} alt="Album"/></figure>
    <div className="pl-5 space-y-1 pr-2">
      <h2 className="font-extrabold text-2xl text-center pt-2">{spotName}</h2>
  <div className="md:flex justify-between">
  <h3 className="font-bold text-xl">Country Name: {countryName}</h3>
  <div className="flex items-center gap-1">  
      <FaLocationDot />
    <h4 className="texl-xl font-semibold">{location}</h4>
  </div>
  </div>
 <div className="space-y-5">
 <p>{description}</p>
      <h4 className="texl-xl font-semibold">Average Cost :{cost}</h4>
  
      <h4>Seasonality:{seasonality}</h4>
      <h4 className="texl-xl font-semibold">Traveling Time: {travelTime}</h4>
      <h4 className="texl-xl font-semibold">Total Visitors Per Year: {totalVisitors}</h4>
      <h2 className="texl-xl font-semibold">User Email: {userEmail}</h2>
      <h2 className="texl-xl font-semibold">User Name: {userName}</h2>
     
     
 </div>
    </div>
  </div>
  )
}

export default ViewDetails
