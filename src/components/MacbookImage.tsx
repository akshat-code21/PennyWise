interface HeroImageProps {
  srcSet: string;
  alt: string;
}

export const MacbookImage = ({ srcSet, alt }: HeroImageProps) => {
  return (
    <img
      loading="lazy"
      srcSet={srcSet}
      alt={alt}
      className="aspect-[1.04] object-contain w-full grow max-md:max-w-full max-md:mt-10"
    />
  );
};
