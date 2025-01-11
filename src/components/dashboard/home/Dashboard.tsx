import ExpensesTable from "../ui/ExpensesTable"
import { PieChartComponent } from "../ui/PieChartComponent"
export default function Dashboard(){
    return(
        <div className="min-h-screen w-full">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Financial Overview</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="w-full">
                        <h2 className="text-xl font-semibold mb-4">Expense Distribution by Category</h2>
                        <PieChartComponent/>
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
                        <ExpensesTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}