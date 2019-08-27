import { useEffect, useState, useRef } from "react";

//Devuelve un array de 2 elementos: 1.- Si el elemento se muestra o no, 2.- La referencia al elemento
export const useNearScreen = () => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  //Lo siguiente se puede utilizar como un Lazy Loader para multiples componentes
  useEffect(() => {
    const runObservation = async () => {
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : await import("intersection-observer"); //Esto como dependation injection
      const observer = new window.IntersectionObserver(function(entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    };
    runObservation();
  }, [element]);
  return [show, element];
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
};

export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { value, onChange };
};
