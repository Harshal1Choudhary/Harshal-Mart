import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "#16161d",
      text: "#5b5b73",
      white: "#fff",
      black: "#16161d",
      helper: "#6254f3",
      helperDark: "#4b3fd4",

      bg: "#ffffff",
      section_bg: "#f6f7fb",
      footer_bg: "#0a1435",
      btn: "#6254f3",
      border: "#e6e8f0",
      hr: "#e6e8f0",
      gradient: "linear-gradient(135deg, #6254f3 0%, #8f7bff 100%)",
      shadow:
        "0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04)",
      shadowSupport: "0 10px 30px rgba(16, 24, 40, 0.10)",
      cardShadow: "0 6px 24px rgba(16, 24, 40, 0.08)",
      radius: "14px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
