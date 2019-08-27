import React from "react";
import { PhotoCardWithQuery } from "./../Container/PhotoCardWithQuery";
import { Layout } from "../Components/Layout";

const Detail = ({ detailId }) => (
  <Layout title={`Fotografía ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
);

export default Detail;
