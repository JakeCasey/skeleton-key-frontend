import React, { Component } from "react";
import styled from "styled-components";

const Tagline = styled.h1`
  margin-bottom: 0px;
  font-weight: bold;
`;

const SubTagline = styled.h2`
  margin-top: 12px;
  font-weight: 200;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    max-width: 60%;
    margin: 80px;
  }
  img {
    max-width: 40%;
    margin: 80px;
  }
`;

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroContainer>
          <div>
            <Tagline>Skeleton Key.</Tagline>
            <SubTagline>💀🔑</SubTagline>
          </div>

          <img src={"/static/images/hero.svg"} />
        </HeroContainer>
      </div>
    );
  }
}
