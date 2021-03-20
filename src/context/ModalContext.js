import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  // State del provider
  const [idRecipe, saveIdRecipe] = useState(null);
  const [recipe, setRecipe] = useState({});

  // Una vez tenemos una receta, llamar a la api
  useEffect(() => {
    const getRecipe = async () => {
      if (!idRecipe) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

      const result = await axios.get(url);

      setRecipe(result.data.drinks[0]);
    };

    getRecipe();
  }, [idRecipe]);

  return (
    <ModalContext.Provider
      value={{
        saveIdRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
