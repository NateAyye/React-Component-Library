import styled, { css } from "styled-components";
import generateHex, { invertColor } from "/src/utils/StandardizeColor";

//?
//? Props:
//? - color = <any built in html color will work and will change the background color of the main element
//? - glow =
//?
//?
//?
//?
//?

// * Custom styles for the component
export const StyledButton = styled.a.attrs({
  id: "btn-default",
})`
  position: relative;
  display: inline-block;
  z-index: 100;
  text-decoration: none;
  padding: 7px 45px;
  margin: 0px 0.5rem;
  color: ${(props) =>
    props.color && typeof window !== "undefined"
      ? invertColor(generateHex(props.fgcolor), true)
      : "#ffffffee"};
  cursor: pointer;
  border-radius: 0.75rem;
  border: ${(props) => (props.color ? props.color : "var(--clr-neon)")} 0px solid;
  overflow: hidden;
  background: ${(props) => (props.fgcolor ? props.fgcolor : "var(--default-bg-gradient)")};
  user-select: none;
  text-align: center;

  transition: all 500ms ease-in-out;

  p {
    position: relative;
    opacity: 0.8;
    font-family: "Oswald", sans-serif;
    font-weight: 600;
    z-index: 300;
    pointer-events: none;
  }

  span {
    position: absolute;
    background: ${(props) =>
      props.color && typeof window !== "undefined"
        ? invertColor(generateHex(props.color), true) + "aa"
        : "#ffffffaa"};
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    z-index: 200;
    animation: animate 700ms linear infinite;
  }

  ${(props) =>
    props.activated &&
    css`
      &[active] {
        border-bottom: 5px solid ${(props) => (props.color ? props.color : "#0075b7")};
      }
    `}

  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid #222222bb;
    `}
      
      ${(props) =>
    props.glow &&
    css`
      font-size: 1.2rem;
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
      color: ${(props) => (props.color ? props.color : "var(--clr-neon)")};
      background: #00000000;
      border: ${(props) => (props.color ? props.color : "var(--clr-neon)")} 0px solid;
      padding: 7px 30px;
      position: relative;
      z-index: 1;
      text-shadow: 0 0 0.125em ${(props) => (props.color ? props.color : "var(--clr-neon)")},
        0 0 0.25em currentColor;

      transition: all 500ms ease-in-out;

      &:before {
        pointer-events: none;
        content: "";
        position: absolute;
        background: ${(props) => (props.color ? props.color : "var(--clr-neon)")};
        top: 100%;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;

        transition: all 500ms ease-in-out;

        transform: perspective(1em) rotateX(40deg) scale(1, 0.35);

        filter: blur(1em);
        opacity: 0;
      }

      &:focus,
      :hover {
        background: ${(props) => (props.color ? props.color : "var(--clr-neon)")};
        color: ${(props) =>
          props.color && typeof document !== "undefined"
            ? invertColor(generateHex(props.color), true)
            : "var(--clr-bg)"};
        text-shadow: none;
        box-shadow: 0 0 11px ${(props) => (props.color ? props.color : "var(--clr-neon)")};
      }

      &:focus::before,
      :hover::before {
        opacity: 1;
      }

      &:focus::after,
      :hover::after {
        opacity: 1;
      }
    `}
`;
