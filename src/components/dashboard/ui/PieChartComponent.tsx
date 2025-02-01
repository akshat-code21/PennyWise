"use client";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import axios from "axios";
import { Expense } from "./ExpensesDataTable";
import { addExpense } from "@/features/expenses/expensesSlice";

const chartConfig = {
  spending: {
    label: "spending",
  },
  shopping: {
    label: "Shopping",
    color: "#52b788",
  },
  health: {
    label: "Health",
    color: "#95d5b2",
  },
  travel: {
    label: "Travel",
    color: "#74c69d",
  },
  food: {
    label: "Food",
    color: "#1b4332",
  },
  entertainment: {
    label: "Entertainment",
    color: "#2d6a4f",
  },
} satisfies ChartConfig;
function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    shopping: "#52b788",
    health: "#95d5b2",
    travel: "#74c69d",
    food: "#1b4332",
    entertainment: "#2d6a4f",
  };
  return colors[category] || "#cccccc"; // Default color if category is not predefined
}
export function PieChartComponent() {
  const dispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.expenses);
  useEffect(() => {
    const fetchExpenses = async () => {
      if (expenses && expenses.length > 0) return;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://pennywise-backend-ts.onrender.com/api/v1/expenses",
          {
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        );
        const fetchedExpenses = response.data.expenses;
        if (fetchedExpenses && fetchedExpenses.length > 0) {
          fetchedExpenses.map((expense: Expense) => {
            dispatch(addExpense(expense));
          });
        }
      } catch (e) {}
    };
    fetchExpenses();
  }, [dispatch, expenses]);
  const chartData = Object.values(
    expenses.reduce((acc: any, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = {
          category: expense.category,
          spending: 0,
          fill: getCategoryColor(expense.category),
        };
      }
      acc[expense.category].spending += expense.amount;
      return acc;
    }, {})
  );
  return (
    <Card className="bg-white rounded-lg shadow-sm border h-96 flex justify-center items-center">
      {" "}
      <CardHeader className="pb-0"></CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[400px] w-full [&_.recharts-pie-label-text]:fill-foreground"
        >
          <ResponsiveContainer width="100%" height="100%" className={"flex items-center justify-center"}>
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="spending"
                nameKey="category"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                label={{
                  offset: 20,
                }}
                labelLine={true}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
