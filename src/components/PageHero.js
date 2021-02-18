import React from "react";
import styled from "styled-components";

const PageHero = ({ title }) => {
  return (
    <PageHeroContainer>
      <div className="section-center">
        <h3>/ {title}</h3>
      </div>
    </PageHeroContainer>
  );
};

const PageHeroContainer = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
`;

export default PageHero;
