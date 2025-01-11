import { Link } from "react-router-dom"
import logo from "../assets/svgs/3.svg"
import { Button } from "@/components/ui/button"
export default function Navbar(){
    return(
        <div className="flex items-center justify-between mx-5">
            <div className="size-24">
                <img src={logo} alt="Helo" />
            </div>
            <div className="buttons flex items-center gap-2">
                <Button variant="outlineLogin" asChild>
                    <Link to={"/auth/login"} target="_blank">Log In</Link>
                </Button>
                <Button className="bg-green-500 hover:bg-green-800" asChild>
                    <Link to={"/auth/signup"} target="_blank">Sign Up</Link>
                </Button>
            </div>
        </div>
    )
}