import { useRef, useState } from "react";
import Galaxynews from '../../../assets/images/home/home_astro.png';




const Landing = () => {
  const [isOn, setIsOn] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0, side: "right" });
    const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      const bounds = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - bounds.left;


      const side = relativeX < bounds.width / 2 ? "left" : "right";

      setPosition({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        side,
      });
    }
  };

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="xmmllg:gap-[150px] w-full flex-col  lg:flex xl:flex-row xl:items-center justify-between">
      <div className="flex flex-col gap-y-[24px] justify-center ">
        <div className="w-[600px] 2xl:w-[840px]">
          <p className="text-white font-fredoka 2xl:text-[72px] text-[62px] font-bold leading-[72px] 2xl:leading-[90px] pb-[16px]">
            Discover Your Future Career in Just 3 Questions!
          </p>
          <p className="text-white text-[32px] leading-[48px] font-fredoka">
            Not sure what you want to be when you grow up? Answer 3 fun
            questions or upload your CV, and we’ll guide you toward your
            best-fit career path.
          </p>
        </div>

        <div
          className="relative flex w-[350px] py-[24px] cursor-pointer rounded-[24px] border-[1px] border-[#fc33a4] "
          onClick={handleToggle}
        >
          <div
            className={`absolute top-1 bottom-1 w-1/2 rounded-[24px] bg-[#FD29A4] transition-all duration-300 ${
              isOn ? "left-1/2" : "left-1"
            }`}
          />
          <div className="relative z-10 flex w-1/2 items-center justify-center text-[16px] leading-[24px] font-fredoka text-white">
           Start prediction
          </div>
          <div className="relative z-10 flex w-1/2 items-center justify-center text-[16px] leading-[24px] font-fredoka text-white">
            Upload my CV
          </div>
        </div>
      </div>
      <div ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setShowDialog(true)}
      onMouseLeave={() => setShowDialog(false)}
      onMouseMove={handleMouseMove}
      >
        <img
        src={Galaxynews}
        alt="astronut"
        draggable="false"
        className="w-full h-auto lg:pr-[50px] scale-100 2xl:scale-125"
        />
        {showDialog && (
          <div className="absolute tooltiptext text-black font-bold xl:text-[24px] leading-[32px] font-fredoka  pointer-events-none" style={{
            top: position.y + 10,
            left:
              position.side === "left"
                ? position.x - 280 // move to left (adjust width of box ~150px)
                : position.x + 10, // move to right
          }}>
          Wanna predict your career…?
        </div> 
        )}
      </div>
    </div>
  );
};

export default Landing;
