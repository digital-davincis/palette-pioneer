// src/App.js

import React from "react";
import Landing from "./components/Landing";
import Inputs from "./components/Inputs";
import Palette from "./components/Palette";

export default function App() {
  return (
    <main className="text-gray-400 bg-background_about body-font">
      <Landing />
      <Inputs />
      <Palette />
    </main>
  );
}