import React from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ProblemProvider } from "./ProblemContext";
import ProblemRender from "./components/ProblemRender";

function App() {
  return (
    <ProblemProvider>
      <ProblemRender />
    </ProblemProvider>
  );
}

export default App;
