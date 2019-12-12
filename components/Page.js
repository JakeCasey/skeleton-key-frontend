import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import TopBar from "./special/TopBar";

const theme = {
  primary: "lightskyblue",
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "100vw",
  bs: "0 5px 15px hsla(0, 0%, 0%, 0.2)",
  borders: "4px",
  button_borders: "4px",
  button_color: "lightskyblue"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  /* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  } */
  html {
    font-family: "Inter";
  }

  @font-face {
    font-family: 'Inter';
    src: url('/static/Inter/Inter-Regular.woff') format('woff');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('/static/Inter/Inter-Medium.woff') format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/static/Inter/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/static/Inter/Inter-Bold.woff') format('woff');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/static/Inter/Inter-Black.woff') format('woff');
    font-weight: 800;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <TopBar />
          <div className="p-8">
            <Header />
            {this.props.children}
          </div>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
