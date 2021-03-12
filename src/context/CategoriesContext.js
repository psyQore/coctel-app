import React, { createContext, useState } from "react";

// Crear el context
export const CategoriesContext = createContext();

// Provider es donde se encuentra las funciones y state
const CategoriesProvider = (props) => {
  // Crea el state del context
  const [hello, setHello] = useState("Hola ");

  return (
    <CategoriesContext.Provider
      value={{
        hello,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;