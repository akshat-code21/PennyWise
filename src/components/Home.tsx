import CardsComponent from "./CardsComponent";
import Gallery from "./Gallery";
import ImageComponent from "./ImageComponent";
import MacbookSection from "./MacbookSection";
import Navbar from "./Navbar";
import { TypewriterComponent } from "./TypeWriterComponent";
export default function Home() {
  return (
    <div className="bg-green-200 h-screen w-full ">
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center mt-28 gap-8">
        <TypewriterComponent />
        <ImageComponent />
      </div>
      <CardsComponent/>
      <Gallery/>
      <MacbookSection/>
    </div>
  );
}
