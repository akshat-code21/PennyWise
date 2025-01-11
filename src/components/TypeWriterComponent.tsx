"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterComponent() {
  const words = [
    {
      text: "An",
    },
    {
      text: "AI",
    },
    {
      text: "Expense",
    },
    {
      text: "Analyzer.",
      className: "text-black dark:text-black",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="text-4xl text-green-500 dark:text-neutral-200  font-bold  sm:text-9xl  ">
        PennyWise
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
