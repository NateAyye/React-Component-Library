import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const PokeCard = (props) => {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <CardContainer>
        <Image src={props.src}></Image>
      </CardContainer>
      <InfoContainer>
        <Title>{props.title}</Title>
        <Type src={props.type} />
      </InfoContainer>
    </Tilt>
  );
};

const CardContainer = styled.div`
  overflow: hidden;
  font-family: "Segoe UI", sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column-reverse;
  min-height: 9rem;
  min-width: 8rem;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.5rem;
  background: #ffffff;
`;
const Image = styled.img`
  width: 100%;
  image-rendering: pixelated;
  transform: scale(1.25);
`;
const Title = styled.p`
  color: #000;
`;

const InfoContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  text-align: center;
  width: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem;
  background: #aaa;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
`;

const Type = styled.img`
  border-radius: 50%;
  height: 1rem;
`;

export default PokeCard;
