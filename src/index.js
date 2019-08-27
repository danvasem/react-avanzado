import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-danvasem.turok3000.now.sh/graphql",
  request: operation => {
    //Para agregar la cabecer el JSON Web Token e identificar al usuario como un usuario registrado
    const token = window.sessionStorage.getItem("token");
    const authorization = token ? `Bearer ${token}` : "";
    operation.setContext({
      headers: {
        authorization
      }
    });
  },
  onError: error => {
    //En caso que se expire la sesión
    const { networkError } = error;
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location.href = "/";
    }
  }
});

ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
