import React, { useState, useEffect } from "react";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import ProjectForm from "./Forms/ProjectForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <ProjectForm />
    </div>
  );
}

export default App;
