import React, { useState } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageProps = { navigate, currentPage: page };

  return (
    <>
      {page === "home"      && <Home      {...pageProps} />}
      {page === "dashboard" && <Dashboard {...pageProps} />}
      {page === "about"     && <About     {...pageProps} />}
      {page === "login"     && <Login     {...pageProps} />}
    </>
  );
}
