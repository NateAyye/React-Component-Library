import styled from "styled-components";

export const Skill = styled.div`
  width: 160px;
  height: 160px;
  //background: cornflowerblue;
  position: relative;
  
  
  circle {
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 445;
    stroke-dashoffset: 445;
    animation: anim 2.15s linear forwards;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes anim {
    100% {
      stroke-dashoffset: ${(props) => 445 - (props.progress * .01) * 445};
    }
  
`

export const Outer = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  box-shadow: var(--box-shadow-pop);
  padding: 20px;
`

export const Inner = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  box-shadow: var(--box-shadow-inner);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Progress = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #555;
`