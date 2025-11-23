// components/Navbar.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/navbar/logo.png";
import { AlignJustify, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goToFAQ = () => {
    navigate("/faq");
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="start-00 fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="FutureMe" className="h-12 w-auto" />
          <span className="hidden font-mono text-4xl font-bold text-black uppercase sm:block">
            Career.AI
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <button
            onClick={goToFAQ}
            className="cursor-pointer font-mono text-[24px] font-medium text-black transition hover:text-white"
          >
            FAQ
          </button>
        </div>

        {/* CTA */}
        {/* <div className="hidden lg:block">
          <Link
            to="/prediction"
            className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105"
          >
            Start Prediction
          </Link>
        </div> */}

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? (
            <X className="h-7 w-7 text-white" />
          ) : (
            <AlignJustify className="h-7 w-7 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/70 lg:hidden" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-black to-purple-900/50 p-8 shadow-2xl">
            <div className="mt-24 space-y-6">
              <button
                onClick={goToFAQ}
                className="block w-full cursor-pointer rounded-lg bg-white/10 py-5 font-mono text-2xl font-semibold text-white backdrop-blur-md transition hover:bg-pink-500/30"
              >
                FAQ
              </button>
              {/* <Link
                to="/prediction"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 py-5 text-center text-2xl font-bold text-white"
              >
                Start Prediction
              </Link> */}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
