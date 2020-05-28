import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, useTheme } from '../src/hooks/useTheme';

function ThemeButton() {
  const { toggleTheme } = useTheme();
  return <div><button onClick={toggleTheme}>Toggle theme</button></div>
}

addDecorator((storyFn) => {
  return (
    <ThemeProvider>
      <ThemeButton />
      {storyFn()}
    </ThemeProvider>
  )
});
