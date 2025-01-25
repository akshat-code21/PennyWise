import { OptimizeButton } from "./OptimizeButton";
import { MacbookImage } from "./MacbookImage";

export const ExpenseHero = () => {
  return (
    <section className="bg-[rgba(228,196,175,1)] flex flex-col overflow-hidden items-center justify-center px-[70px] py-[104px] max-md:px-5 max-md:py-[100px]">
      <div className="w-full max-w-[1225px] max-md:max-w-full">
        <div className="flex gap-12 max-md:flex-col max-md:items-center">
          <div className="w-[44%] max-md:w-full max-md:ml-0">
            <div className="w-full self-stretch my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-[64px] font-bold max-md:max-w-full max-md:text-[40px]">
                Streamline Your Expenses
              </h1>
              <div className="mt-[268px] max-md:mt-10">
                <OptimizeButton>Start Optimizing Your Expenses</OptimizeButton>
              </div>
            </div>
          </div>
          <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <MacbookImage
              srcSet="https://cdn.builder.io/api/v1/image/assets/5e03890ce4654e0cbba12d8814a6543f/7ddecd6e76deda560a0466ecec52715a6e029ddbe1316ffc55f59ee1a43d69dc?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/5e03890ce4654e0cbba12d8814a6543f/7ddecd6e76deda560a0466ecec52715a6e029ddbe1316ffc55f59ee1a43d69dc?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/5e03890ce4654e0cbba12d8814a6543f/7ddecd6e76deda560a0466ecec52715a6e029ddbe1316ffc55f59ee1a43d69dc?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/5e03890ce4654e0cbba12d8814a6543f/7ddecd6e76deda560a0466ecec52715a6e029ddbe1316ffc55f59ee1a43d69dc?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/5e03890ce4654e0cbba12d8814a6543f/7ddecd6e76deda560a0466ecec52715a6e029ddbe1316ffc55f59ee1a43d69dc?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/5e03890ce4654e0cbba12d8814a6543f/7ddecd6e76deda560a0466ecec52715a6e029ddbe1316ffc55f59ee1a43d69dc?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/5e03890ce4654e0cbba12d8814a6543f/7ddecd6e76deda560a0466ecec52715a6e029ddbe1316ffc55f59ee1a43d69dc?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/5e03890ce4654e0cbba12d8814a6543f/7ddecd6e76deda560a0466ecec52715a6e029ddbe1316ffc55f59ee1a43d69dc?placeholderIfAbsent=true"
              alt="Expense Management Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
