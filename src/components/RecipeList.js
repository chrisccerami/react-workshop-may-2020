import React, {useState, useEffect} from "react";
import useDebounce from '../hooks/useDebounce';
import {useTheme} from '../hooks/useTheme';

async function fetchRecipes(query) {
  const result = await fetch(`http://localhost:3001/recipes?q=${query}`);
  return await result.json();
}

export default function RecipeList({query}) {
  const [recipes, setRecipes] = useState([]);
  const debouncedQuery = useDebounce(query);
  const { theme } = useTheme();

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
