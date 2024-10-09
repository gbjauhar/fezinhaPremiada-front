import { styled } from "styled-components";

interface Props {
  open: boolean
}

export const Ul = styled.ul<Props>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 25px 10px;
  }
  @media (min-width: 500px) {
  width: 100%;
  gap: 2vw;
}
  @media (max-width: 500px) {
    flex-flow: column nowrap;
    background-color: var(--color-medium-purple);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const Link = styled.a`
  color: #fff;
`