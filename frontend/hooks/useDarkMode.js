import React, { useState } from 'react';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useState(initialValue);

    const toggleMode = updatedValue => {
        setDarkMode(updatedValue);
      };
      return [darkMode, setDarkMode, toggleMode]
}