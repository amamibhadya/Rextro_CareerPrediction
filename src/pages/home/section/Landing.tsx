import { useState, useRef } from "react";
import PreviewUseAutoScroll from "../../../components/PreviewUseAutoScroll";
import useClickOutside from "../../../hooks/UseClickOutside";
import { ModernSimpleInput } from "../../../components/Input";


const Landing = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState("");

  useClickOutside(chatRef, () => setChatOpen(false));

  return (
    <div className="w-full ">
      {chatOpen ? (

        <div className="fixed inset-0 w-full  bg-black/70 flex items-center justify-center z-50">

          <div ref={chatRef} className="w-[90%] max-w-3xl h-[90%] bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
            <PreviewUseAutoScroll />
          </div>
        </div>
      ) : (

        <div className="w-full flex-col flex xl:flex-row items-center justify-between h-full">
          <div className="flex flex-col gap-y-[24px] justify-center w-full xl:w-1/2">
            <div className="w-full items-center text-center">
              <p className="text-white font-fredoka text-[72px] font-bold leading-[72px] 2xl:leading-[90px] pb-[16px] uppercase">
                Build Imagination on your mind
              </p>
            </div>


            {/* <button
              
              className="px-6 py-3 bg-sky-500 rounded-xl text-white font-fredoka hover:bg-sky-600 transition"
            >
              Open Chat
            </button> */}
            <ModernSimpleInput
            onClick={() => setChatOpen(true)}
        className="w-72"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        type="text"
        value={value}
      />
          
          </div>
          

          <div className="flex w-full xl:w-1/2">
            {/* background image or other landing content */}
          </div>

       
        </div>
        
      )}
      
    </div>
  );
};

export default Landing;
