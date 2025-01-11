import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { addExpense } from "@/features/expenses/expensesSlice";
import { RootState } from "@/store/store";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export type Expense = {
  id: string;
  description: string;
  category: string;
  createdAt: string;
  amount: number;
};

export type GroupedExpenses = {
  category: string;
  totalAmount: number;
  numberOfExpenses: number;
};

export default function ExpensesTable() {
  const dispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.expenses);

  useEffect(() => {
    const fetchExpenses = async () => {
      if (expenses && expenses.length > 0) return;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://pennywise-backend-q3e3.onrender.com/api/v1/expenses",
          {
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
          }
        );
        const fetchedExpenses = response.data.expenses;
        if (fetchedExpenses && fetchedExpenses.length > 0) {
          fetchedExpenses.forEach((expense: Expense) => {
            dispatch(addExpense(expense));
          });
        }
      } catch (e) {
        console.error("Error fetching expenses:", e);
      }
    };
    fetchExpenses();
  }, [dispatch, expenses]);

  // Group expenses by category and calculate totals
  const groupedExpenses: GroupedExpenses[] = expenses.reduce(
    (acc: GroupedExpenses[], expense: Expense) => {
      const existingCategory = acc.find(
        (item) => item.category.toLowerCase() === expense.category.toLowerCase()
      );

      if (existingCategory) {
        existingCategory.totalAmount += expense.amount;
        existingCategory.numberOfExpenses += 1;
      } else {
        acc.push({
          category: expense.category,
          totalAmount: expense.amount,
          numberOfExpenses: 1,
        });
      }
      return acc;
    },
    []
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-gray-50">
            <TableHead className="w-[100px] font-semibold">Index</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold">Total Amount</TableHead>
            <TableHead className="text-right font-semibold">
              Number of Expenses
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groupedExpenses.map((group, idx) => (
            <TableRow key={group.category} className="hover:bg-gray-50">
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="capitalize">{group.category}</TableCell>
              <TableCell>₹ {group.totalAmount.toFixed(2)}</TableCell>
              <TableCell className="text-right">
                {group.numberOfExpenses} expense
                {group.numberOfExpenses > 1 ? "s" : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
