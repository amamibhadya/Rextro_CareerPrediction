import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
interface LayoutProps {
  children: React.ReactNode;
  sectionRefs?: { [key: string]: React.RefObject<HTMLDivElement | null> }; // <- here
}

const MainLayout: React.FC<LayoutProps> = ({ children, sectionRefs }) => {
  return (
    <div className="min-h-screen w-full bg-[#0f0f0f]">
      <div className="mx-auto flex min-h-screen max-w-[1920px] flex-col overflow-x-hidden overflow-y-auto scroll-smooth px-[16px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px]">
        <Navbar sectionRefs={sectionRefs} />
        <main className="mx-auto w-full flex-1">{children}</main>
        <div className="pt-[54px]">
          {" "}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout; // ← Add this line
