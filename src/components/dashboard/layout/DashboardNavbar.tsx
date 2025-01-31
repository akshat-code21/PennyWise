import logo from "../../../assets/logo.png"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export default function DashboardNavbar(){
    return(
        <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-green-200 p-2 sm:p-3 md:p-4">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-5 py-2 px-3 sm:px-4 md:px-8">
                <div className="w-12 sm:w-16 md:w-24 transition-all">
                    <img src={logo} alt="Logo" className="w-full h-auto" />
                </div>
                <div className="text-green-500 text-lg sm:text-xl md:text-3xl font-bold whitespace-nowrap">
                    PennyWise | <span className="text-black font-medium">Dashboard</span>
                </div>
            </div>
            <div className="my-2 sm:my-0 sm:mr-3 md:mr-5">
                <Button size="sm" className="px-3 sm:px-4 md:px-6 py-1 sm:py-2" asChild>
                    <Link to="/">Log Out</Link>
                </Button>
            </div>
        </div>
    )
}