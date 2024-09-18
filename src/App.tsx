import React, { ReactNode, useEffect, useRef, useState } from "react";
import AntDesignPage from "./Pages/AntDesignPage";
import PageNative from "./Pages/PageNative";
import MuiPage from "./Pages/MuiPage";
import { Link, Route, Routes } from "react-router-dom";
import { NavContainer, PageItem } from "./styles";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/mui" element={<MuiPage />} />
        <Route path="/antd" element={<AntDesignPage />} />
        <Route path="/native" element={<PageNative />} />
      </Routes>
      <NavContainer>
        <Link to="/mui">
          <PageItem>Material UI</PageItem>
        </Link>
        <Link to="/antd">
          <PageItem>Ant Design</PageItem>
        </Link>
        <Link to="/native">
          <PageItem>Nativo</PageItem>
        </Link>
      </NavContainer>
    </div>
  );
}

export default App;
