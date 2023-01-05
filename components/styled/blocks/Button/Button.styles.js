import styled from "styled-components";
import {keyframes} from 'styled-components'


const animate = keyframes`
  0% {
    width: 0px;
    height: 0px;
    opacity: 0.25;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
`

export const RippleButton = styled.a`
  position: relative;
  font-family: 'Segoe UI';
  font-weight: bold;
  display: inline-block;
  padding: 12px 36px;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(90deg, #0162c8, #55e7fc);

  span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    animation: ${animate} 1s linear infinite;
  }
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
  font-size: 16px;
  font-weight: bolder;

  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.primary ? "#689F38" : "#0078b9")};
    border: none;
  }
`;

export const DarkButton = styled(Button)`
  color: ${(props) => props.theme.dark.text};
  background-color: ${(props) => props.theme.dark.primary};
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
