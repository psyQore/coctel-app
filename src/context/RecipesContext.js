import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, searchRecipes] = useState({
    name: "",
    category: "",
  });
  const [consult, setConsult] = useState(false);

  // Destructuring
  const { name, category } = search;

  // Use effect que se ejecuta cuando cambia search
  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        const result = await axios.get(url);

        //console.log(result.data.drinks);
        setRecipes(result.data.drinks);
      };

      getRecipes();
    }
  }, [search]);

  return (
    <RecipesContext.Provider
      value={{
        searchRecipes,
        setConsult
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
