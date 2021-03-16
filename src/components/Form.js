import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const { categories } = useContext(CategoriesContext);
  const { searchRecipes } = useContext(RecipesContext);

  // funcion para leer los contenidos
  const getRecipeData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        searchRecipes(search);
      }}
    >
      <fieldset className="text-center mt-3">
        <legend>Busca Tragos por categoría o Ingredientes:</legend>
      </fieldset>

      <div className="row mt-3">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={getRecipeData}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={getRecipeData}
          >
            <option value=""> -- Selecciona Categoría -- </option>
            {categories.map((categorie) => (
              <option key={categorie.strCategory} value={categorie.strCategory}>
                {categorie.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Trago"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
