import { AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import styled from "styled-components";

// local
import BottomNavElement from "./navigations/BottomNavigation";
import MiddleNavElement from "./navigations/MiddleNavigation";
import MobileNavigationElement from "./navigations/MobileNavigation";
import TopNavElement from "./navigations/TopNavigation";
import Footer from "./home/Footer";
import Marquee from "./home/Marquee";

interface Props {
  children: ReactNode;
}

const Navigation = styled.header`
  height: 0;
  position: relative;
  z-index: 999;
`;

const Layout: React.FC<Props> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
      <Navigation>
        <TopNavElement />
        <Marquee />
        <MiddleNavElement toggleMenu={toggleMenu} />
        <BottomNavElement />
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <MobileNavigationElement toggleMenu={toggleMenu} />
          )}
        </AnimatePresence>
      </Navigation>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
