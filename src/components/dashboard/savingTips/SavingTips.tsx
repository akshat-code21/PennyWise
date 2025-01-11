import { RiRobot2Line } from 'react-icons/ri'

export default function SavingTips() {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-sm min-h-[300px]">
            <div className="mb-6">
                <RiRobot2Line className="w-16 h-16 text-blue-500 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                AI-Powered Saving Tips Coming Soon
            </h2>
            <p className="text-gray-600 max-w-md mb-4">
                We're working on intelligent features to help you save more effectively. 
                Our AI will analyze your spending patterns and provide personalized 
                recommendations for better financial management.
            </p>
            <div className="flex gap-2 items-center bg-blue-100 p-3 rounded-lg">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <span className="text-sm text-blue-700">
                    Currently in development
                </span>
            </div>
        </div>
    )
}