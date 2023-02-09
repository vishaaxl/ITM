import styled from "styled-components";

interface ButtonProps {
  color: string;
  compact?: boolean;
  outline?: boolean;
}

export const Button = styled.div<ButtonProps>`
  background: ${({ theme, color }) =>
    color == "red" ? theme.accent.secondary : theme.accent.tertiary};
  color: ${({ theme }) => theme.secondary};
  /* box-shadow: ${({ theme }) => theme.shadowPrimary}; */
  font-weight: 600;
  font-size: 0.9rem;

  padding: ${({ compact }) => (compact ? "0.75em 1.75em" : "0.85em 2.75em")};
  border-radius: 2px;
  max-width: fit-content;

  cursor: pointer;

  @media (min-width: 767px) {
    padding: ${({ compact }) => (compact ? "0.75em 2em" : "1em 3em")};
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #333333;
  }
`;

export const ButtonOutline = styled.div`
  color: ${({ theme }) => theme.light};
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* box-shadow: ${({ theme }) => theme.shadowPrimary}; */
  font-weight: 600;
  font-size: 0.9rem;

  padding: 0.75em 1.75em;
  border-radius: 2px;
  max-width: fit-content;

  cursor: pointer;

  @media (min-width: 767px) {
    padding: 0.75em 2em;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    border: 1px solid ${({ theme }) => theme.accent.primary};
  }
`;
