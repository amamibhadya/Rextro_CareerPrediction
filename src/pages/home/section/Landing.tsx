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
    <div className="w-full">
      {chatOpen ? (
        <div className="fixed inset-0 z-50 flex w-full items-center justify-center bg-black/70">
          <div
            ref={chatRef}
            className="h-[90%] w-[90%] max-w-3xl overflow-hidden rounded-xl bg-neutral-900 shadow-lg"
          >
            <PreviewUseAutoScroll />
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-between xl:flex-row">
          <div className="flex w-full flex-col justify-center gap-y-[24px] xl:w-1/2">
            <div className="w-full items-center text-center">
              <p className="font-fredoka pb-[16px] xl:text-[88px] text-[80px] leading-[72px] font-bold text-white uppercase 2xl:leading-[140px]">
                Build Imagination on your mind with logic ai
              </p>
            </div>

            {/* <button
              
              className="px-6 py-3 bg-sky-500 rounded-xl text-white font-fredoka hover:bg-sky-600 transition"
            >
              Open Chat
            </button> */}
            <div className="codepen-button">
              <ModernSimpleInput
                onClick={() => setChatOpen(true)}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Say Hi..."
                type="text"
                value={value}
              />
            </div>
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
