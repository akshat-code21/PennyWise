"use client"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import Loader from "@/components/ui/loader";
interface SpendingTrendsProps {
  monthlySpending: Record<string, number> | undefined;
}
const chartConfig = {
  spending: {
    label: "Spendings",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function SpendingTrends({monthlySpending}: SpendingTrendsProps) {
  if(!monthlySpending){
    return(
      <div className="flex items-center justify-center mx-auto my-40">
        <Loader />
      </div>
    )
  }
  const safeMonthlySpeding = monthlySpending || {}
  const resultArray = Object.entries(safeMonthlySpeding).map(([key,value])=>{
    return{
      month : key,
      spending : value
    }
  })  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-green-500 font-bold text-xl tracking-normal">Spending Trends</CardTitle> 
        <CardDescription>Your month-on-month spends</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={resultArray}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="spending"
              type="natural"
              stroke="var(--color-spending)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-spending)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
