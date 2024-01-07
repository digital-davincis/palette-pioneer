// src/App.js

import React from "react";
import { useState } from 'react';
import Landing from "./components/Landing";
import Inputs from "./components/Inputs";
import Palette from "./components/Palette";

export default function App() {
  const [palette, setPalette] = useState(["#FFFFFF", "#A9A9A9", "#808080", "#686868", "#000000"]);

  const updatePalette = async () => {
    try {
      const response = await fetch('http://localhost:3001/random-palette');
      if (response.ok) {
        const newPalette = await response.json();
        setPalette(newPalette);
      } else {
        console.error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error fetching palette:', error);
    }
  };

  return (
    <main className="text-gray-400 bg-background_about body-font">
      <Landing />
      <Inputs onChangePalette={updatePalette} />
      <Palette palette={palette} />
    </main>
  );
}