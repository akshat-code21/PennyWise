import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactElement } from "react";
interface InsightsCardProps {
    title: string;
    content: string | ReactElement | number;
}
export default function InsightsCard({title,content}: InsightsCardProps) {
  return (
    <Card className="w-80 shadow-xl">
      <CardHeader>
        <CardTitle className="text-green-500 font-bold text-xl tracking-normal">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="font-bold text-xl">{content}</div>
      </CardContent>
    </Card>
  );
}
