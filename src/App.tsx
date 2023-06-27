import React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";
const Home = loadable(() => import("./pages/Home/index"));
const LogIn = loadable(() => import("./pages/LogIn/index"));
const SignUp = loadable(() => import("./pages/SignUp/index"));
const Product = loadable(() => import("./pages/Product/index"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
