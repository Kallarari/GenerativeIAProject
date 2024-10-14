import React, { ReactNode, useEffect, useRef, useState } from "react";
import PageNative from "./Pages/PageNative";
import { Link, Route, Routes } from "react-router-dom";
import './styles.css'

function App() {
  return (
    <div>
      <PageNative />      
    </div>
  );
}

export default App;
