import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"



const UpdateSpot = () => {
  const spots = useLoaderData()
  const {_id, image, spotName,countryName,location,description,cost,seasonality,travelTime,totalVisitors} = spots

    const handleUpdate = e =>{
           
      e.preventDefault()
        
        const form = e.target
        const image = form.image.value
        const spotName = form.spotName.value
        const countryName = form.countryName.value
        const location = form.location.value
        const description = form.description.value
        const cost = form.cost.value
        const seasonality = form.seasonality.value
        const travelTime = form.travelTime.value
        const totalVisitors = form.totalVisitors.value
      

        const updateSpots = { image, spotName,countryName,location,description,cost,seasonality,travelTime,totalVisitors,}
        fetch(`https://simple-tourism-scerver.vercel.app/spots/${_id}`,{
            method: 'PUT',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(updateSpots)
          })
          .then(res=> res.json())
          .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Spots Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
          })
    }
  return (
    <div>
    <form onSubmit={handleUpdate} className="bg-[#F4F3F0] p-10">
      <div className="text-center pb-10">
        <h3 className="text-3xl font-bold text-black">Update Tourists Sports</h3>
        <p className='lg:px-64'>
          It is a long established fact that a reader will be distraceted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using Content here.
        </p>
      </div>
      <div className="md:grid grid-cols-3 mb-5  gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black">Image:</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full"
              type="text"
             
              defaultValue={image}
              placeholder="Enter your image url"
              name="image"
              id=""
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black">Tourists Spot Name:
</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full"
              type="text"
              placeholder="Enter your tourists spot name"
              name="spotName"
              defaultValue={spotName}
              id=""
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black"> Country Name:</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full"
              type="text"
              defaultValue={countryName
            }
              placeholder="Enter your  country name"
              name="countryName"
              id=""
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black">Location:</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full"
              type="text"
              defaultValue={location}
              placeholder="Enter your location"
              name="location"
              id=""
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black">Description:</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full "
              type="text"
              defaultValue={description}
              placeholder="Enter your description"
              name="description"
              id=""
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black">Average Cost:</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full "
              type="text"
              defaultValue={cost}
              placeholder="Enter your average cost"
              name="cost"
              id=""
            />
          </label>
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black">Seasonality:</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full "
              type="text"
              defaultValue={seasonality}
              placeholder="Enter your seasonality"
              name="seasonality"
              id=""
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black">Travel Time:</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full "
              type="text"
              defaultValue={travelTime}
              placeholder="Enter your travel time"
              name="travelTime"
              id=""
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-xl text-black">Total Visitors Per Year:</span>
          </label>
          <label className="input-group">
            <input required
              className="input input-bordered bg-white w-full "
              type="text"
              defaultValue={totalVisitors}
              placeholder="Enter your Total Visitors"
              name="totalVisitors"
              id=""
            />
          </label>
        </div>
        
       
      </div>
   
      <input
        className="btn input input-bordered bg-white w-full text-orange-500 font-bold"
        type="submit"
        defaultValue="Update"
      />
    </form>
  </div>
  )
}

export default UpdateSpot
