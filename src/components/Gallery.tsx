import FeaturesSection from "./FeaturesSection";

export default function Gallery(){
    return (
        <main className="bg-[rgba(243,234,225,1)] flex flex-col overflow-hidden items-center pt-[75px] pb-[198px] px-20 max-md:pb-[100px] max-md:px-5">
          <div className="flex w-full max-w-[1117px] flex-col items-stretch max-md:max-w-full">
            <header>
              <h1 className="text-black text-[64px] font-bold text-center self-center max-md:max-w-full max-md:text-[40px]">
                Intelligent Expense Monitoring
              </h1>
            </header>
            
            <FeaturesSection />
          </div>
        </main>
      );
}