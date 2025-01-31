import ExpensesTable from "../ui/ExpensesTable"
import { PieChartComponent } from "../ui/PieChartComponent"
export default function Dashboard(){
    return(
        <div className="min-h-screen w-full">
            <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-6 lg:py-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8">Financial Overview</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    <div className="w-full bg-white rounded-lg shadow-sm p-3 sm:p-4">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">Expense Distribution</h2>
                        <div className="h-[300px] sm:h-[350px] md:h-[400px]">
                            <PieChartComponent/>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow-sm p-3 sm:p-4">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">Recent Expenses</h2>
                        <div className="overflow-x-auto">
                            <ExpensesTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}