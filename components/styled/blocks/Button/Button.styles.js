import styled, { css } from "styled-components";
import { device } from '/pages/_app'

export const DefaultButton = styled.a`
  position: relative;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  display: inline-block;
  padding: 8px 45px;
  margin: auto;
  color: #ffffffee;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #222222cc;
  border-radius: 1rem;
  box-shadow: 0 0 2px 2px #22222222;
  overflow: hidden;
  background: linear-gradient(90deg, #263238aa, #212121aa);
  user-select: none;


  @media (prefers-color-scheme: light) {

  }

  span {
    position: absolute;
    background: #333333;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    animation: animate 1s linear infinite;
  }
`;

export const RippleButton = styled.a`
  position: relative;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  display: inline-block;
  padding: 12px 36px;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(90deg, #0162c8, #55e7fc);

  span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    animation: animate 1s linear infinite;
  }

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;

      span {
        background: black;
      }
    `}
`;

export const Button = styled.button`
  cursor: pointer;
  width: 8rem;
  height: 3rem;
  border: none;
  border-radius: 0.75rem;
  border-bottom: 2px solid ${(props) => (props.primary ? "#689F38" : "#0078b9")};
  border-right: 1px solid ${(props) => (props.primary ? "#689F38" : "#0078b9")};
  background-color: ${(props) => (props.primary ? "#8BC34A" : "#23aaf2")};
  font-size: 15px;
  letter-spacing: 1px;

  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.primary ? "#689F38" : "#0078b9")};
    border: none;
  }
`;

export const DarkButton = styled(Button)`
  color: ${(props) => props.theme.dark.text};
  background-color: ${(props) => props.color};
  border: none;

  box-shadow: 0px 0px 10px ${(props) => props.theme.dark.primary};

  &:hover {
    color: ${(props) => props.theme.dark.primary};
    background-color: ${(props) => props.theme.dark.primary1};
    box-shadow: 0px 0px 5px ${(props) => props.theme.dark.primary1};
  }
`;

export const NeonButton = styled.button`
  font-size: 1rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-neon);
  background-color: #00000000;
  border: var(--clr-neon) 0px solid;
  padding: 0.25em 0.75em;
  border-radius: 0.25em;
  position: relative;
  z-index: 1;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.35), 0 0 0.25em currentColor;

  transition: all 500ms ease-in-out;

  &::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: var(--clr-neon);
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    transition: all 500ms ease-in-out;

    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);

    filter: blur(1em);
    opacity: 0;
  }

  &::after {
    content: "";
    border-radius: 0.25em;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 1em 0.1em var(--clr-neon);
    opacity: 0;
    background-color: var(--clr-neon);
    z-index: -1;
    transition: all 500ms ease-in-out;
  }

  &:focus,
  :hover {
    background: var(--clr-neon);
    color: var(--clr-bg);
    text-shadow: none;
  }

  &:focus::before,
  :hover::before {
    opacity: 0.7;
  }

  &:focus::after,
  :hover::after {
    opacity: 0.75;
  }
`;
