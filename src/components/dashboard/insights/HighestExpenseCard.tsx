import InsightsCard from "../../ui/InsightsCard";
type HighestExpenseProps = {
  highestExpense: {
    amount: number;
    description: string;
  };
};
export default function HighestExpenseCard({highestExpense}:HighestExpenseProps) {
  return <InsightsCard title="Highest Expense" content={`₹${highestExpense.amount} (${highestExpense.description})`} />;
}
