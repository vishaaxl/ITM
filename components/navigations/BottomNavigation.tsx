import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";

// local
import { navItems } from "@/data/navigation";
import { useRouter } from "next/router";

export const Link = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent.secondary};
  }
`;

const BottomNav = styled.div`
  position: sticky;
  top: 0;

  /* background: ${({ theme }) => theme.accent.secondary}; */
  color: ${({ theme }) => theme.secondary};

  display: none;
  padding: 1rem 0;

  @media (min-width: 1024px) {
    display: block;
  }

  .links {
    display: flex;
    gap: 1.35rem;
    justify-content: space-between;
    align-items: center;

    font-weight: 600;
    font-size: 0.85rem;

    .link {
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:last-child {
        border-radius: 3px;
        padding: 0.75rem 2rem;
        background: ${({ theme }) => theme.accent.secondary};
        color: ${({ theme }) => theme.secondary};

        &:hover {
          color: ${({ theme }) => theme.accent.secondary};
          background: ${({ theme }) => theme.secondary};
        }
      }
    }
  }

  .dropdown {
    position: relative;

    &:hover {
      .dropdown-content {
        display: block;
      }
    }

    .dropdown-content {
      border-radius: 3px;
      display: none;
      width: fit-content;
      position: absolute;
      left: -1.75rem;
      padding: 1rem 1.75rem;
      background: ${({ theme }) => theme.secondary};
      color: ${({ theme }) => theme.primary};
      animation: show 0.2s ease-in-out;

      li {
        white-space: nowrap;
        margin-bottom: 0.75rem;
        &:hover {
          color: ${({ theme }) => theme.accent.secondary};
        }
      }
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BottomNavElement = () => {
  const router = useRouter();
  return (
    <BottomNav>
      <div className="container">
        <ul className="links">
          {navItems.map((item) =>
            item.isDropDown ? (
              <li className="link dropdown" key={item.id}>
                <Link>
                  <span>{item.title}</span>
                  <HiOutlineChevronDown />
                </Link>
                <ul className="dropdown-content">
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
                onClick={() => router.push(`/${item.href as string}`)}
              >
                <span>{item.title}</span>
              </Link>
            )
          )}
        </ul>
      </div>
    </BottomNav>
  );
};

export default BottomNavElement;
