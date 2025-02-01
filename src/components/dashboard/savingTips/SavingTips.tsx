import Loader from "@/components/ui/loader";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { RiRobot2Line } from 'react-icons/ri';

export default function SavingTips() {
  const [isLoading,SetIsLoading] = useState(false);
  const [insightsData,setInsightsData] = useState("" as string);
  useEffect(()=>{
    const fetchAIInsights = async () =>{
        SetIsLoading(true)
        try{
            const token = localStorage.getItem('token')
            const response = await axios.get("https://pennywise-backend-q3e3.onrender.com/api/v1/insights/ai-analysis",{
                headers:{
                    "token" : token
                }
            })
            console.log(typeof response.data.insights);
            setInsightsData(response.data.insights)
        }catch(e){
            console.log(e);
        }
        SetIsLoading(false)
    }
    fetchAIInsights();
    return(()=>{
      SetIsLoading(false);
    })
  },[])

  if(isLoading){
    return(
      <div className="min-h-[400px] flex flex-col justify-center items-center p-6">
        <Loader/>
        <p className="text-gray-600 mt-4">Analyzing your spending patterns...</p>
      </div>
    )
  }
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8 bg-green-50 p-4 rounded-lg">
        <RiRobot2Line className="w-10 h-10 text-green-600" />
        <div>
          <h2 className="text-2xl font-bold text-green-800">AI Savings Analysis</h2>
          <p className="text-green-600 text-sm mt-1">Personalized insights to help you save more</p>
        </div>
      </div>
      
      <div className="prose max-w-none bg-white rounded-xl shadow-lg p-8 border border-green-100">
        <ReactMarkdown
          components={{
            h2: ({children}) => <h2 className="text-xl font-semibold text-green-800 mt-8 mb-4 pb-2 border-b border-green-100">{children}</h2>,
            strong: ({children}) => <span className="text-green-600 font-semibold">{children}</span>,
            ul: ({children}) => <ul className="list-disc pl-6 space-y-3 my-4 text-gray-700">{children}</ul>,
            li: ({children}) => <li className="text-gray-700">{children}</li>,
            p: ({children}) => {
              if (typeof children === 'string') {
                const parts = children.split(/(\$?\d+(?:\.\d+)?%?)/g);
                return (
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {parts.map((part, index) => {
                      if (part.match(/\$?\d+(?:\.\d+)?%?/)) {
                        return <strong key={index} className="text-green-600 font-semibold">{part}</strong>;
                      }
                      return part;
                    })}
                  </p>
                );
              }
              return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>;
            },
          }}
        >
          {insightsData}
        </ReactMarkdown>
      </div>
    </div>
  );
}