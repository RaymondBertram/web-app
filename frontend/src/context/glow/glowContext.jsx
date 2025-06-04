import React, { createContext, useContext, useState } from "react";

// 1. Context erstellen
const GlowContext = createContext();

// 2. Provider-Komponente exportieren
export const GlowProvider = ({ children }) => {
  const [glow, setGlow] = useState("");

  return (
    <GlowContext.Provider value={{ glow, setGlow }}>
      {children}
    </GlowContext.Provider>
  );
};

// 3. Custom Hook für einfacheren Zugriff
export const useGlowContext = () => useContext(GlowContext);
