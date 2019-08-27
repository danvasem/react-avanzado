import React, { Fragment } from "react";
import { FavsWithQuery } from "../Container/GetFavorites";
import { Helmet } from "react-helmet";
import { Layout } from "../Components/Layout";

const Favs = () => (
  <Layout title="Tus favoritos" subtitle="Aquí puedes encontrar tus favoritos">
    <FavsWithQuery />
  </Layout>
);

export default Favs;
