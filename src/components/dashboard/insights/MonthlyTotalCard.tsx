import InsightsCard from "../../ui/InsightsCard";
type MonthlyTotalProps = {
  monthlyTotal: number;
};
export default function MonthlyTotalCard({monthlyTotal}:MonthlyTotalProps) {
  return (
    <div>
      <InsightsCard title={"Monthly Total"} content={"₹"+monthlyTotal}></InsightsCard>
    </div>
  );
}
