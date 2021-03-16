import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [search, searchRecipes] = useState({
        name:"",
        category: ""
    })

    // Use effect que se ejecuta cuando cambia search
    
    useEffect(() => {
        const getRecipes = async () => {
            const url = 
        }
    }, [])

    return (
        <RecipesContext.Provider value={{
            searchRecipes
        }}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;