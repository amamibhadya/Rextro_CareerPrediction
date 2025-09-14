import MainLayout from "./Layouts/MainLayout";
import FAQSection from "./pages/faq/section/FAQ";
import Landing from "./pages/home/section/Landing";
import { useRef } from "react";

//import { useRef } from "react";
function App() {
  const sectionRefs = {
    Landing: useRef<HTMLDivElement>(null),
     FAQ: useRef<HTMLDivElement>(null),
  };
  return (
    <MainLayout sectionRefs={sectionRefs}>
      <div className="flex flex-col gap-y-[54px]">
        <div ref={sectionRefs.Landing}>
          <Landing />
        </div>
        <div ref={sectionRefs.FAQ}>
          <FAQSection />
        </div>
        {/* <div ref={sectionRefs.Aboutus}>
          <Aboutus />
        </div>
        <div ref={sectionRefs.Technology}>
          <Technologybehind />
        </div>
        <div ref={sectionRefs.Howaxis}>
          <Howaxis />
        </div>
        <div ref={sectionRefs.Services}>
          <Services />
        </div>
        <div ref={sectionRefs.RoadMap}>
          <RoadMap />
        </div>
         */}
      </div>
    </MainLayout>
  );
}

export default App;
