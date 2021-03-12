import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

// Crear el context
export const CategoriesContext = createContext();

// Provider es donde se encuentra las funciones y state
const CategoriesProvider = (props) => {
  // Crea el state del context
  const [categories, setCategories] = useState([]);

  // Ejecutar el llamado a la api
  useEffect(() => {
    const getCategories = async () => {
      // Url de la api
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      // Hacemos la consulta con axios
      const categories = await axios.get(url);

      // Guardamos las categorias de la consulta
      setCategories(categories.data.drinks);
    };

    // Llamamos la funcion que hace la consulta a la api
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{categories}}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
