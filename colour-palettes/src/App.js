// src/App.js

import React from "react";
import { useState } from 'react';
import Landing from "./components/Landing";
import Inputs from "./components/Inputs";
import Palette from "./components/Palette";

export default function App() {
  const [palette, setPalette] = useState(["#FFFFFF", "#A9A9A9", "#808080", "#686868", "#000000"]);

  const updatePalette = (newPalette) => {
    setPalette(newPalette);
  };

  return (
    <main className="text-gray-400 bg-background_about body-font">
      <Landing />
      <Inputs onChangePalette={updatePalette} />
      <Palette palette={palette} />
    </main>
  );
}