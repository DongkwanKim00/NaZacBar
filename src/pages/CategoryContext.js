import React, { createContext, useState } from 'react';

// Create a new context for category
export const CategoryContext = createContext('');

// Create a provider component for the category context
export const CategoryProvider = ({ children }) => {

  // Define the state for category using useState hook
  const [category, setCategory] = useState('');

  // Render the provider component and pass the category state and setter function as the value
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
};