import styled from 'styled-components'


import Header from './Header';
import Image from './Image';
import Text from './Text';
import Title from './Title';



const Card = styled.div`
  background: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
  border-radius: 0.75rem;
  min-width: 5rem;
  max-width: 16rem;
  min-height: 10rem;
  max-height: 15rem;
  margin: 5px 5px 10px;
  padding: 5px;
  box-shadow: 2px 2px 4px 0px ${(props) => props.theme.dark.primary};

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

