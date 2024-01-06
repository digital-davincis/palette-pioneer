// src/App.js

import React from "react";
import Landing from "./components/Landing";
import Inputs from "./components/Inputs";

export default function App() {
  return (
    <main className="text-gray-400 bg-background_about body-font">
      <Landing />
      <Inputs />
      <p className="text-gray-400 bg-background_main text-center body-font -mt-10">
        © 2024 HackED
      </p>
    </main>
  );
}