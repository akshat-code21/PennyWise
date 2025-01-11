import { Outlet } from "react-router-dom"
import AuthNavbar from "./AuthNavbar"
export default function AuthLayout(){
    return(
        <div>
            <AuthNavbar/>
            <Outlet></Outlet>
        </div>
    )
}