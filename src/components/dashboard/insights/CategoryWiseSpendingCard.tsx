"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Loader from "@/components/ui/loader";
const chartConfig = {
  spending: {
    label: "Spending",
  },
  entertainment: {
    label: "Entertainment",
    color: "#52b788",
  },
  food: {
    label: "Food",
    color: "#95d5b2",
  },
  health: {
    label: "Health",
    color: "#74c69d",
  },
  shopping: {
    label: "Shopping",
    color: "#1b4332",
  },
  travel: {
    label: "Travel",
    color: "#2d6a4f",
  },
} satisfies ChartConfig;
interface CategoryWiseSpendingCardProps {
  categorySpending: Record<string, number> | undefined;
}
export function CategoryWiseSpendingCard({
  categorySpending,
}: CategoryWiseSpendingCardProps) {
  if (!categorySpending) {
    return (
      <div className="flex items-center justify-center mx-auto my-40">
        <Loader />
      </div>
    );
  }
  const safeCategorySpending = categorySpending || {};
  const resultArray = Object.entries(safeCategorySpending).map(([key, value]) => {
    return {
      category: key,
      spending: value,
      fill: (chartConfig as Record<string, { color?: string }>)[key]?.color || "#cccccc",
    };
  });
  const totalSpending = React.useMemo(() => {
    return resultArray.reduce((acc, curr) => acc + curr.spending, 0);
  }, [resultArray]);
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-green-500 font-bold text-xl tracking-normal">Category Wise Spending</CardTitle> 
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[350px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={resultArray}
              dataKey="spending"
              nameKey="category"
              innerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  const cx = (viewBox as any).cx;
                  const cy = (viewBox as any).cy;
                  if (cx && cy) {
                    return (
                      <text
                        x={cx}
                        y={cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={cx}
                          y={cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          ₹ {totalSpending.toLocaleString()}
                        </tspan>
                        <tspan
                          x={cx}
                          y={cy + 24}
                          className="fill-muted-foreground"
                        >
                          Total Spending
                        </tspan>
                      </text>
                    );
                  }
                  return null; 
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>      
    </Card>
  );
}
