import React, { Fragment } from "react";
import { ListOfPhotoCard } from "./../Container/ListOfPhotoCard";
import { ListOfCategories } from "./../Components/ListOfCategories";
import { Helmet } from "react-helmet";
import { Layout } from "../Components/Layout";

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title="Petgram - tu app de mascotas"
      subtitle="Con petgram podes encontrar tus mascotas preferidas siempre!!">
      <ListOfCategories />
      <ListOfPhotoCard categoryId={categoryId} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId; //Para comparar si debe o no volverse a renderizar
});
