import styled from "styled-components";

interface BackgroundProps {
  dark: boolean;
}

export const Background = styled.section<BackgroundProps>`
  background: ${({ theme, dark }) =>
    dark ? theme.accent.primary : theme.lightbg};
  color: ${({ theme }) => theme.secondary};
`;
