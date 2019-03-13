import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext, Provider, Subscribe } from '..';
import { Header, Footer } from '../../theme';
import './layout.css';
import './main.css';

export const Layout = ({ children }) => (
  <Provider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div>
          <Header />
          <LayoutStyled themeType={theme}>
            {children}
            <Subscribe />
          </LayoutStyled>
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.any,
};

const LayoutStyled = styled.div`
  width: 100%;
  padding-top: 7rem;

  ${({ theme, themeType }) => themeType === 'dark' && 'background: #212121;'};
`;

export default Layout;
