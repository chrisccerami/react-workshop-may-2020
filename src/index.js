import React, {useState, createContext} from "react";
import { render } from "react-dom";
import SearchInput from './components/SearchInput';
import RecipeList from './components/RecipeList';
import "./style.css";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

export const ThemeContext = createContext();

export default function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  }

  return (
    <ThemeContext.Provider value={{theme: theme}}>
      <button onClick={toggleTheme}>Change Theme</button>
      <SearchInput setQuery={setQuery} query={query} placeholder="enter a query"/>
      <RecipeList query={query}/>
    </ThemeContext.Provider>
  )
}

render(<App />, document.getElementById("root"));
