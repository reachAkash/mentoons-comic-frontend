import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "@/components/comics/Footer";
import Breadcrumbs from "@/components/common/BreadCrumbs";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/auth";

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-24 left-10 z-50 hidden lg:block">
        <Breadcrumbs />
      </div>
      <Header />
      <div className="py-12 lg:py-20">{children}</div>
      {!isAuthRoute && <Footer />}
    </div>
  );
};

export default MainLayout;
