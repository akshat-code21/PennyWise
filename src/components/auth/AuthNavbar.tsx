import logo from "../../assets/logo.png"
export default function AuthNavbar(){
    return(
        <div className="flex items-center gap-5 bg-green-200 py-2 px-8">
            <div className="w-24">
                <img src={logo} alt="" />
            </div>
            <div className="text-green-500 text-3xl font-bold ">PennyWise</div>
        </div>
    )
}