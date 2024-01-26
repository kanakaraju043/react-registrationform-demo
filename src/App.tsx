import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardWithForm } from "./components/Login";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <div className="dark:bg-slate-200">
      <div className="flex float-end">
        <ModeToggle />
      </div>
      <div className="flex justify-center items-center h-screen">
        <CardWithForm />
      </div>
    </div>
  );
}

export default App;
