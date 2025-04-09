import { useContext } from "react"
import { AuthContext } from "../provaider/AuthProvaider"
import { Navigate, useLocation } from "react-router-dom"


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivateRoute
