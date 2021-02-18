import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";

const Checkout = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <CheckoutContainer className="page">
        <h1>Checkout</h1>
      </CheckoutContainer>
    </main>
  );
};

const CheckoutContainer = styled.div``;

export default Checkout;
