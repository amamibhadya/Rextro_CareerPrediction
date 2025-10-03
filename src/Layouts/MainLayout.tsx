import Navbar from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1920px] flex-col justify-between overflow-y-hidden bg-black">
      <Navbar />
      <main className="mx-auto w-full flex-1 px-[100px]">{children}</main>
    </div>
  );
};

export default MainLayout;
