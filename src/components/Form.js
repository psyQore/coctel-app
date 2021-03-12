import React, { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

const Form = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <form className="col-12">
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
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="category">
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
