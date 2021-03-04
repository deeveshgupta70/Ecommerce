import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import formatPrice from "../utils/formatPrice";

const CartTotal = () => {
  const { totalAmount, shippingFee } = useCartContext();

  return (
    <CartTotalContainer>
      <div>
        <article>
          <h5>
            Total: <span>{formatPrice(totalAmount)}</span>
          </h5>
          <p>
            Shipping fee: <span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            Order total: <span>{formatPrice(totalAmount + shippingFee)}</span>
          </h4>
        </article>
        <Link to="/checkout" className="btn">
          Proceed to checkout
        </Link>
      </div>
    </CartTotalContainer>
  );
};

const CartTotalContainer = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotal;
