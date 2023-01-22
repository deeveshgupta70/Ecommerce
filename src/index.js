import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
//dev-pu8wyk-g.us.auth0.com
//7vHgXJ01aWGyMVLWdZUwQSUapigdjfKu
ReactDOM.render(
  <Auth0Provider
    domain='dev-pu8wyk-g.us.auth0.com'
    clientId="7vHgXJ01aWGyMVLWdZUwQSUapigdjfKu"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
