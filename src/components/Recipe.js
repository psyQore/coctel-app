import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
    height: '100%',
    maxHeight: 500,
    display: 'block'
    },
    header: {
    padding: '12px 0',
    borderBottom: '1px solid darkgrey'
    },
    content: {
    padding: "12px 0",
    overflow: 'scroll'
    }
}));

const Recipe = ({ recipe }) => {
  // Configuracion de modal de material-ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Extraer los valos del context
  const { inforecipe, saveIdRecipe, setRecipe } = useContext(ModalContext);

  const showInformation = (inforecipe) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (inforecipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {inforecipe[`strIngredient${i}`]} {inforecipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img
          className="card-img-top"
          src={recipe.strDrinkThumb}
          alt={recipe.strDrink}
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              saveIdRecipe(recipe.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              saveIdRecipe(null);
              setRecipe({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{inforecipe.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>

              <p>{inforecipe.strInstructions}</p>

              <img
                className="img-fluid"
                src={inforecipe.strDrinkThumb}
                alt={inforecipe.strDrink}
              />

              <h3 className="mt-3">Ingredientes y Cantidades</h3>
              <ul>{showInformation(inforecipe)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
