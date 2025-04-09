import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MySpotCard = ({spot}) => {
    const { _id, image, spotName,countryName,location,description} = spot
  const handleDelete = _id =>{
  console.log(_id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
   fetch(`https://simple-tourism-scerver.vercel.app/spots/${_id}`,{
    method: 'DELETE'
   })
   .then(res => res.json())
   .then(data => {
    if(data.deletedCount > 0){
        Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success"
              });
    }
   })

    }
  });
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{spotName}</h2>
      <h3>{countryName}</h3>
      <div className="flex items-center gap-1">  
    <FaLocationDot />
  <h4 className="">{location}</h4>
</div>
      <p>{description}</p>
      <div className="flex justify-between border-t-2 pt-2 mt-2">
      <Link to={`/update/${_id}`}>
    <button className="btn bg-orange-200">Update</button>
</Link>
      
        
   <button onClick={()=> handleDelete(_id)} className="btn bg-red-400">Delete</button>
      
       
      </div>
    </div>
  </div>
  )
}

export default MySpotCard
