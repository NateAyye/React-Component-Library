import styled from 'styled-components'


import Header from './Header';
import Image from './Image';
import Text from './Text';
import Title from './Title';

import React from 'react'
import Tilt from 'react-parallax-tilt'

const Card = (props) => {
  return (
    <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12}>
    <StyledCard>
      {props.children}
    </StyledCard>
    </Tilt>
  )
}




const StyledCard = styled.div`
  background: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
  border-radius: 0.75rem;
  min-width: 5rem;
  max-width: 25rem;
  margin: 5px 5px 10px;
  padding: 5px;
  
  transition: all 0.5s ease-in-out;
  
  img {
    transition: all 0.5s ease-in-out;
  }
  
  &:hover {
    img {
      box-shadow: 0px 0px 10px ${(props) => props.theme.dark.primary1};
    }
  }
  `;

Card.Header = Header;
Card.Image = Image;
Card.Text = Text;
Card.Title = Title;

export default Card;


