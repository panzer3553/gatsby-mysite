import React from 'react';
import { Link } from 'gatsby';
import { Container, ThemeContext } from 'Common';
import Envelope from 'Static/about/envelope.svg';
import Phone from 'Static/about/phone.svg';
import Marker from 'Static/about/marker.svg';
import EnvelopeWhite from 'Static/about/envelope-white.svg';
import PhoneWhite from 'Static/about/phone-white.svg';
import MarkerWhite from 'Static/about/marker-white.svg';
import {
 Wrapper, Img, P, DetailsContainer, Text,
} from './styles';

const Details = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper as={Container}>
        <Text theme={theme}>
          I’m Anh Doan, also known as doananh234, I’m a self-taught Graphic and full stack
          developer. I'm really interested in Technology. Science including mathematics, physics
          science belong to my interests as well, you can know more about me by reading my
          {' '}
          <Link to="/blog">articles</Link>
.
        </Text>
        <Text theme={theme}>
          Currently I'm working remotely at
          {' '}
          <a href="https://obytes.com/?ref=doananh234" target="_blank" rel="noopener noreferrer">
            Obytes
          </a>
          {' '}
          as a Front end developer.
        </Text>
        <Text theme={theme}>For business inquiries feel free to get in touch with me at:</Text>
        <DetailsContainer>
          <P theme={theme}>
            <Img src={theme === 'dark' ? EnvelopeWhite : Envelope} alt="email" />
            ismai23l@hotmail.com
          </P>
          <P theme={theme}>
            <Img src={theme === 'dark' ? PhoneWhite : Phone} alt="phone" />
            +212 663-532761
          </P>
          <P theme={theme}>
            <Img src={theme === 'dark' ? MarkerWhite : Marker} alt="address" />
            Nr 23 Lot El Waha, Errachidia, Morocco
          </P>
        </DetailsContainer>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

export { Details };
