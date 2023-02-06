import { HiOutlineChevronDown } from "react-icons/hi";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// local
import { navItems } from "@/data/navigation";

const MobileNavigation = styled(motion.div)`
  background: ${({ theme }) => theme.secondary};
  overflow: hidden;
  width: 100%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M461.46 589.73C639.29 551.56 716.38 88.97 987.35 87.01 1258.32 85.05 1368.75 322.17 1513.24 327.81' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M439.33 580.36C590.86 565.51 659.41 260.4 946.81 243.61 1234.2 226.82 1317.3 40.35 1454.28 36.41' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M987.15 573.53C1109.23 548.12 1134.9 251.66 1350.37 231.69 1565.84 211.72 1617.26 104.78 1713.59 102.89' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M277.24 578.94C465.38 565.52 597.99 200.93 929.6 199.95 1261.21 198.97 1415.16 339.17 1581.96 339.95' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3cpath d='M697.62 567.5C793.52 538.57 724.78 288.77 960.84 265.42 1196.9 242.07 1344.32 46.01 1487.27 41.42' stroke='rgba(206%2c 214%2c 221%2c 0.44)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: center center;

  box-shadow: ${({ theme }) => theme.shadowPrimary};

  .container {
    padding: 1rem 0;
  }

  .dropdown-content {
    height: 0;
    overflow: hidden;

    li {
      transform: translateX(2rem);
      font-weight: 500;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      cursor: pointer;
    }
  }

  .dropdown-visible {
    height: fit-content;
  }
`;

const Link = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  font-weight: 600;
  margin-bottom: 1rem;

  &:hover {
    color: ${({ theme }) => theme.accent.secondary};
  }

  .dropdown-active {
    color: ${({ theme }) => theme.accent.secondary};
  }
`;

const MobileNavigationElement = () => {
  const router = useRouter();
  const [active, setActive] = useState(-1);
  return (
    <MobileNavigation
      key="mobile-menu"
      initial={{ height: 0 }}
      animate={{
        height: "fit-content",
        transition: {
          times: [0.17, 0.67, 0.43, 0.96],
        },
      }}
      exit={{ height: 0 }}
    >
      <div className="container">
        <ul className="links">
          {navItems.map((item) =>
            item.isDropDown ? (
              <li
                className="link dropdown"
                key={item.id}
                onClick={() =>
                  active == item.id ? setActive(-1) : setActive(item.id)
                }
              >
                <Link>
                  <span className={item.id == active ? "dropdown-active" : ""}>
                    {item.title}
                  </span>
                  <HiOutlineChevronDown />
                </Link>
                <ul
                  className={`dropdown-content ${
                    item.id == active && "dropdown-visible"
                  }`}
                >
                  {item.links?.map((link) => (
                    <li
                      key={link.id}
                      onClick={() => router.push(`/${link.href}`)}
                    >
                      {link.title}
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <Link
                key={item.id}
                onClick={() => router.push(item.href as string)}
              >
                <span>{item.title}</span>
              </Link>
            )
          )}
        </ul>
      </div>
    </MobileNavigation>
  );
};

export default MobileNavigationElement;
