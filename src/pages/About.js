import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import image from "../assets/about_us.svg";

const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <AboutContainer className="page section section-center">
        <img src={image} alt="light room" />
        <article>
          <div className="title">
            <h2>Our team</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              itaque nisi facere ab blanditiis, ut, earum quos repellat quod
              obcaecati excepturi, doloribus corrupti hic consequatur voluptate
              magnam? Veritatis vero minima quis sapiente culpa fuga amet nam?
              Quibusdam earum tempore fuga eveniet quasi amet fugit mollitia rem
              cumque, molestiae beatae non corporis quia atque officiis ad
              architecto iste voluptate debitis libero minima maxime facilis
              sapiente! Est officia cumque dolore tempore culpa.
            </p>
          </div>
        </article>
      </AboutContainer>
    </main>
  );
};

const AboutContainer = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
