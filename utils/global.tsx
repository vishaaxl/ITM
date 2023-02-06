import styled from "styled-components";

export const AccentLine = styled.span`
  border-radius: 2px;
  position: relative;
  display: block;
  margin: 2rem 0;
  height: 3px;
  width: 20%;
  background: ${({ theme }) => theme.accent.secondary};

  &::before {
    content: "";
    position: absolute;
    left: 40%;
    top: 50%;
    height: 10px;
    width: 30%;
    transform: translate(-50%, -50%);
    border-radius: 5px;

    background: ${({ theme }) => theme.accent.secondary};
  }
`;

export const AccentLineLong = styled.span`
  border-radius: 2px;
  position: relative;
  display: block;
  margin: 1rem 0;
  height: 1px;
  width: 90%;
  background: ${({ theme }) => theme.accent.secondary};

  &::before {
    content: "";
    position: absolute;
    left: 10%;
    top: 50%;
    height: 5px;
    width: 20%;
    transform: translate(-50%, -50%);
    border-radius: 0px;

    background: ${({ theme }) => theme.accent.secondary};
  }
`;
