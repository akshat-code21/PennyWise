import piggy from "../assets/svgs/undraw_savings_re_eq4w.svg"
import man from "../assets/svgs/undraw_segment_analysis_re_ocsl.svg"
export default function ImageComponent() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full">
            <div className="w-full sm:w-1/2 max-w-[300px] sm:max-w-none">
                <img src={piggy} alt="Savings illustration" className="w-full h-auto" />
            </div>
            <div className="w-full sm:w-1/2 max-w-[300px] sm:max-w-none">
                <img src={man} alt="Analysis illustration" className="w-full h-auto" />
            </div>
        </div>
    )
}