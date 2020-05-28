import React, {useState} from "react";
import { render } from "react-dom";
import SearchInput from './components/SearchInput';
import RecipeList from './components/RecipeList';
import Header from './components/Header';
import {ThemeProvider} from './hooks/useTheme';
import "./style.css";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <ThemeProvider>
      <Header />
      <SearchInput setQuery={setQuery} query={query} placeholder="enter a query"/>
      <RecipeList query={query}/>
    </ThemeProvider>
  )
}

render(<App />, document.getElementById("root"));
