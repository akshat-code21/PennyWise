import CardsComponent from "./CardsComponent";
import Gallery from "./Gallery";
import ImageComponent from "./ImageComponent";
import MacbookSection from "./MacbookSection";
import Navbar from "./Navbar";
import { TypewriterComponent } from "./TypeWriterComponent";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-green-200">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="mt-8 sm:mt-12 md:mt-28 space-y-6 sm:space-y-8 md:space-y-2 w-full max-w-6xl px-4 sm:px-6 md:px-8">
          <TypewriterComponent />
          <div className="w-full max-w-4xl mx-auto">
            <ImageComponent />
          </div>
        </div>
        <div className="mt-8 sm:mt-16 w-full">
          <CardsComponent />
          <Gallery />
          <MacbookSection />
        </div>
      </div>
    </div>
  );
}
