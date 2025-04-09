import { useContext, useEffect } from "react"
import { AuthContext } from "../provaider/AuthProvaider"
import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import axios from 'axios';
import auth from "../firebase-config"
import MySpotCard from "./MySpotCard";


const MySpots = () => {
    const [spots, setSpots] = useState([]);
    const {user} = useContext(AuthContext)
  useEffect(()=>{
    const userEmail = user.email;
   
    axios.get('https://simple-tourism-scerver.vercel.app/spots')
    .then(res => {
      
        const filteredSpots = res.data.filter(spot => spot.userEmail === userEmail);
        setSpots(filteredSpots);
        
    })
    .catch(error => {
        console.error('My List is not found: ', error);
    });
  },[])
  return (
    <div>
    
<div className="md:grid grid-cols-3">
{spots.length > 0 ? (
        spots.map(spot => (
            <MySpotCard key={spot._id} spot={spot}></MySpotCard>
    
        ))
    ) : (
        <div className="min-h-screen pt-28  w-full text-center lg:mx-[100%]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    )}
</div>
</div>
  )
}

export default MySpots
