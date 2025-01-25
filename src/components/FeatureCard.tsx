import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  className = "",
}) => {
  return (
    <article className={`flex grow flex-col items-center text-[rgba(44,44,44,1)] text-center ${className}`}>
      {imageUrl && (
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className="aspect-[1] object-contain w-[200px] max-w-full"
          aria-hidden="true"
        />
      )}
      <h2 className="text-2xl font-bold mt-[22px]">
        {title}
      </h2>
      <p className="text-lg font-light mt-[22px] border-black">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;