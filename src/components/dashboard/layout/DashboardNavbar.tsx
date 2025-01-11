import logo from "../../../assets/logo.png"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export default function DashboardNavbar(){
    return(
        <div className="min-w-full flex items-center justify-between bg-green-200 p-2">
            <div className="flex items-center gap-5 py-2 px-8">
                <div className="w-24">
                    <img src={logo} alt="" />
                </div>
                <div className="text-green-500 text-3xl font-bold ">PennyWise | <span className="text-black font-medium">Dashboard</span></div>            
            </div>
            <div className="mr-5">
                <Button asChild>
                    <Link to='/'>Log Out</Link>
                </Button>
            </div>
        </div>
    )
}