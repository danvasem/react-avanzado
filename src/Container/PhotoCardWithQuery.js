import React from "react";
import { PhotoCard } from "../Components/PhotoCard";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Spinner from "../Utils/Spinner";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Spinner />;
  if (error) return <p>Error!</p>;
  return <PhotoCard {...data.photo} />;
};

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
);
