import { useEffect, useState } from "react";
import { CategoryWiseSpendingCard } from "./CategoryWiseSpendingCard";
import HighestExpenseCard from "./HighestExpenseCard";
import LowestExpenseCard from "./LowestExepenseCard";
import MonthlyTotalCard from "./MonthlyTotalCard";
import SpendingTrends from "./SpendingTrends";
import axios from "axios";
type Statistics = {
  monthlyTotalSpending: number;
  categorySpending: Record<string, number>;
  monthlySpending: Record<string, number>;
  highestExpense: {
    amount: number;
    description: string;
  };
  lowestExpense: {
    amount: number;
    description: string;
  };
};
export default function Insights() {
  const [stats, setStats] = useState<Statistics | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const handleRefresh = () => {
      setRefreshTrigger((prev) => prev + 1);
    };

    window.addEventListener("expense-added", handleRefresh);

    // Cleanup listener
    return () => {
      window.removeEventListener("expense-added", handleRefresh);
    };
  }, []);

  useEffect(() => {
    const fetchedStatistics = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://pennywise-backend-ts.onrender.com/api/v1/insights/statistics",
          {
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        );
        setStats(response.data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "An error occurred");
        console.error("Failed to fetch statistics:", e);
      }
    };
    fetchedStatistics();
  }, [refreshTrigger]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 pt-3 justify-center items-center mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MonthlyTotalCard
          monthlyTotal={stats?.monthlyTotalSpending as number}
        />
        <HighestExpenseCard
          highestExpense={{
            amount: stats?.highestExpense?.amount ?? 0,
            description: stats?.highestExpense.description ?? "No description",
          }}
        />
        <LowestExpenseCard
          lowestExpense={{
            amount: stats?.lowestExpense.amount ?? 0,
            description: stats?.lowestExpense.description ?? "No description",
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <CategoryWiseSpendingCard categorySpending={stats?.categorySpending} />
        <SpendingTrends monthlySpending={stats?.monthlySpending} />
      </div>
    </div>
  );
}
