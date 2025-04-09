import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provaider/AuthProvaider"


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = ()=>{
    logOut()
    .then(()=> console.log('user log out sucssfully'))
    .catch(error=>{
      console.error(error)
    })
  }
  const links = <>
  <NavLink to='/'><li><a>Home</a></li></NavLink>
  <NavLink to='/allTorists'><li><a>All Tourists Spot</a></li></NavLink>
  <NavLink to='/addsports'><li><a>Add Tourists Spot</a></li></NavLink>
  <NavLink to='/mySpots'><li><a>My List </a></li></NavLink>

  </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
        </ul>
      </div>
<h1 className="font-extrabold text-4xl">Travel<span className="text-red-600">Sphere</span></h1>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {links}
      </ul>
    </div>
    <div className="navbar-end space-x-3">
      
     
  {
    user ? <>
     <div className='flex gap-4 items-center'>
      <div className="tooltip tooltip-left " data-tip={user.displayName}>
      <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={user.photoURL}/>
  </div>
  </div>
  </div>
  </div>
    <button className="btn" onClick={handleLogOut}><a>Log Out</a></button>
    </> :  <div>
    <Link to='login'> <a className="btn">Login</a></Link>
    <Link to='/register'> <a className="btn">Register</a></Link> 
    </div>
  }
    </div>
  </div>
  )
}

export default Navbar
