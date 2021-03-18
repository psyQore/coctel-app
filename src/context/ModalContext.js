import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  // State del provider
  const [idRecipe, saveIdRecipe] = useState(null);

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
