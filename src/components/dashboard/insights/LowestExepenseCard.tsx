import InsightsCard from "../../ui/InsightsCard";
type LowestExpenseProps = {
  lowestExpense: {
    amount: number;
    description: string;
  };
};
export default function LowestExpenseCard({lowestExpense}:LowestExpenseProps) {
  return <InsightsCard title="LowestExpenseCard" content={`₹${lowestExpense.amount} (${lowestExpense.description})`} />;
}
