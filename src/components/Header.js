import React, {useState} from 'react';
import {useTheme} from '../hooks/useTheme';
import {StarRating} from './StarRating';

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const [showRating, setShowRating] = useState(false);

  function toggleRating() {
    setShowRating(!showRating);
  }

  return(
    <div style={{background: theme.background}}>
      <button onClick={toggleTheme}>Change Theme</button>
      <input type="checkbox" onChange={toggleRating}/>
      {showRating && <StarRating maxStars={5} rating={2.5}/>}
    </div>
  )
}
