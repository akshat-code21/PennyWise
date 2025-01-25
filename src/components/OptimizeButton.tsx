import { Button } from "@/components/ui/button";

interface OptimizeButtonProps {
  children: React.ReactNode;
}

export const OptimizeButton = ({ children }: OptimizeButtonProps) => {
  return (
    <Button
      className="w-full bg-[rgba(44,44,44,1)] text-2xl font-normal tracking-[0px] leading-8 px-3 py-7 rounded-lg border border-[rgba(48,48,48,1)] hover:bg-white hover:text-black transition-colors"
      aria-label="Start optimizing expenses"
    >
      {children}
    </Button>
  );
};
