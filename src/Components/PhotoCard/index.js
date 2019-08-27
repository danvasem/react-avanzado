import React, { useEffect, useRef, useState, Fragment } from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { useNearScreen, useLocalStorage } from "../../Utils/hooks";
import { FavButton } from "../FavButton";
import { ToogleLikeMutation } from "../../Container/ToogleLikeMutation";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToogleLikeMutation>
            {toogleLike => {
              const handleFavClick = () => {
                toogleLike({ variables: { input: { id } } });
              };
              return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />;
            }}
          </ToogleLikeMutation>
        </Fragment>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function(props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  }
};
