'use client';

import { createContext, useContext, useState } from 'react';

const CustomizationContext = createContext();

export function CustomizationProvider({ children }) {
  const [selectedCase, setSelectedCase] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedBand, setSelectedBand] = useState('');

  return (
    <CustomizationContext.Provider
      value={{
        selectedCase,
        setSelectedCase,
        selectedSize,
        setSelectedSize,
        selectedBand,
        setSelectedBand,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
}

export function useCustomization() {
  return useContext(CustomizationContext);
}
