import { useState } from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
const Layout = () => {
  const [theme, setTheme] = useState(null);
  const resetTheme = () => {
    setTheme(null);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="row">
          <TopHeader />
        </div>
      </div>
      <div className="body">
        <div className="row">
          <Outlet />
        </div>
      </div>
      <div className="footer">
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
