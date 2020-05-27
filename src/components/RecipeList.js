import React, {useState, useEffect, useContext} from "react";
import useDebounce from '../hooks/useDebounce';
import {ThemeContext} from '../';

async function fetchRecipes(query) {
  const result = await fetch(`http://localhost:3001/recipes?q=${query}`);
  return await result.json();
}

export default function RecipeList({query}) {
  const [recipes, setRecipes] = useState([]);
  const debouncedQuery = useDebounce(query);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function doFetch() {
      const data = await fetchRecipes(debouncedQuery);
      setRecipes(data);
    }

    doFetch();
  }, [debouncedQuery]);

  return recipes.map((recipe) => {
    return <div key={`${recipe.id}`} style={{color: theme.foreground, background: theme.background}}>{recipe.title}</div>
  })
}
