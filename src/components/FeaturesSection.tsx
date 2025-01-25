import React from 'react';
import FeatureCard from './FeatureCard';
import visibility from "../assets/svgs/visiblity.svg"
import tracking from "../assets/svgs/tracking.svg"
import insights from "../assets/svgs/insights.svg"
const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Enhance Financial Visibility",
      description: "Achieve Financial Clarity and Control with Our AI-Powered Expense Analyzer",
      imageUrl: visibility,
      className: "",
    },
    {
      title: "Simplify Expense Tracking",
      description: "Unlock the Key to Smarter Spending and Sustainable Financial Growth",
      imageUrl: tracking,
      className: "",
    },
    {
      title: "Gain Expense Insights",
      description: "Elevate Your Expense Management to New Heights with Our Cutting-Edge AI-Driven Platform",
      imageUrl: insights,
      className: "",
    },
  ];

  return (
    <section className="mt-[79px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {features.map((feature, index) => (
          <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
            <FeatureCard
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              className={feature.className}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;