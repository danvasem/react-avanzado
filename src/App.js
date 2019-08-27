import React, { useContext, Suspense } from "react";
import { Router, Redirect } from "@reach/router";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Logo from "./Components/Logo";
//import { Detail } from "./Pages/Detail";
import { Home } from "./Pages/Home";
import { NavBar } from "./Components/NavBar";
//import { Favs } from "./Pages/Favs";
//import { User } from "./Pages/User";
import { NotRegisteredUser } from "./Pages/NotRegisteredUser";
import { Context } from "./Context";
import { NotFound } from "./Pages/NotFound";

// Suspense es un componente de React que nos va a permitir suspender algo cuando está en modo lazy();
// y lazy(). El cual nos va a permitir importar un componente que no será cargado hasta que este sea llamado.
// De esta forma mejoraremos el tiempo de carga de nuestra aplicación enormemente.

//Para que funcione la carga del import es necesario que Favs sea exportado como el componente por defecto en el archivo Favs.js
const Favs = React.lazy(() => import("./Pages/Favs"));
const User = React.lazy(() => import("./Pages/User"));
const Detail = React.lazy(() => import("./Pages/Detail"));

//Para que funcione el Lazy Load es necesario envolver todo en un Suspense e indicar cual es el fallback a presentar
export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" noThrow />}
        {!isAuth && <Redirect from="/user" to="/login" noThrow />}
        {isAuth && <Redirect from="/login" to="/" noThrow />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};
