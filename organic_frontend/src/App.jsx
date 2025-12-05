import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./components/pages/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
// import BlogPage from "./components/pages/BlogPage"
import BlogPage from "./components/pages/BlogPage/BlogPage";
import ShopBanner from "./components/pages/ShopBanner/ShopBanner";
import Contact from "./components/pages/Contact/Contact";
import { ToastContainer } from "react-toastify";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>

      {/* </ToastContainer> */}
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<ShopBanner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog"  element={<BlogPage/>} />
            <Route path="/product" element={<Products/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
