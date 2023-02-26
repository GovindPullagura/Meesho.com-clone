import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

// @ts-ignore
export const PrivateRoute=({children})=>{
    // @ts-ignore
    const isAuth=useSelector((store)=>store.authReducer.isAuth)
    
    if(!isAuth){
        return <Navigate to={"/signup"} />
    }
    return children
}