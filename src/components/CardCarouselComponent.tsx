"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import financial from "../assets/svgs/Financial Data Illustration.svg";
import expense from "../assets/svgs/Personal Finance Illustration.svg";
import card from "../assets/svgs/Credit Card Illustration.svg";
import ama from "../assets/svgs/Ask Me Anything.svg";
import time from "../assets/svgs/Time Management Illustration.svg";
export function CardCarouselComponent() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pb-8">
      <h2 className="text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-8 px-4 sm:px-6 md:px-8">
        Uncover Expenses.
      </h2>
      <div className="w-full overflow-hidden">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-fit"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Effortless Tracking",
    title: "",
    src: financial,
    content: <DummyContent />,
  },
  {
    category: "Intelligent Expense Monitoring",
    title: "",
    src: expense,
    content: <DummyContent />,
  },
  {
    category: "Simplify Expense Management",
    title: "",
    src: card,
    content: <DummyContent />,
  },

  {
    category: "Budget with Confidence",
    title: "",
    src: ama,
    content: <DummyContent />,
  },
  {
    category: "Save Time. Save Money. Stay Ahead.",
    title: "",
    src: time,
    content: <DummyContent />,
  },
];
