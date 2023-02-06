import styled from "styled-components";
import { CgMenuRightAlt } from "react-icons/cg";
import { FC } from "react";

const MiddleNav = styled.div`
  min-height: 60px;
  position: relative;
  z-index: 2;
  padding: 0.75rem 0 0 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .section-two {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (min-width: 900px) {
      display: none;
    }

    .menu-icon {
      cursor: pointer;
      font-size: 2.25rem;
      color: ${({ theme }) => theme.secondary};
    }

    .button {
      cursor: pointer;
      border: none;
      font-weight: 600;
      font-size: 0.85rem;
      border-radius: 3px;
      padding: 0.75rem 1.5rem;
      background: ${({ theme }) => theme.accent.secondary};
      color: ${({ theme }) => theme.secondary};

      &:hover {
        color: ${({ theme }) => theme.accent.secondary};
        background: ${({ theme }) => theme.secondary};
      }
    }
  }
`;

interface Props {
  toggleMenu: () => void;
}

const MiddleNavElement: FC<Props> = ({ toggleMenu }) => {
  return (
    <MiddleNav>
      <div className="container">
        <div className="logo"></div>
        <div className="section-two">
          <CgMenuRightAlt className="menu-icon" onClick={() => toggleMenu()} />
          <button className="button">Admissions</button>
        </div>
      </div>
    </MiddleNav>
  );
};

export default MiddleNavElement;
