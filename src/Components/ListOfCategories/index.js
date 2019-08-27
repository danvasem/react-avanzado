import React, { useState, useEffect, Fragment } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import Spinner from "../../Utils/Spinner";

const useCategoryData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCategories = async () => {
      let response = await fetch("https://petgram-server-danvasem.turok3000.now.sh/categories");
      response = await response.json();
      setCategories(response);
      setLoading(false);
    };
    getCategories();
  }, []); //Al dejar un array vacío entonces el hook solo se ejecutará al momento de montar el componente

  return { categories, loading };
};

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoryData();

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 170;
      showFixed != newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll); //Para quitar el evento
  }, [showFixed]); //El segundo parámetro es la dependencia que queremos "escuchar" para renderizar nuevamente el componente

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading ? (
        <Spinner />
      ) : (
        categories.map(category => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent); //Se usa Memo apra evitar el re-renderizado si no ha cambiado las propiedades
