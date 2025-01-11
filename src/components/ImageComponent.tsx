import piggy from "../assets/svgs/undraw_savings_re_eq4w.svg"
import man from "../assets/svgs/undraw_segment_analysis_re_ocsl.svg"
export default function ImageComponent(){
    return(
        <div className="flex items-center ">
            <img src={piggy} alt="" />
            <img src={man} alt="" />
        </div>
    )
}