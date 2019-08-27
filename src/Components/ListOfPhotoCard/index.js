import React from "react";
import { PhotoCard } from "./../PhotoCard";

export const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return photos.map(photo => <PhotoCard key={photo.id} {...photo} />);
};
