import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
   const [sidebarOpen, setSidebarOpen] = useState(
  window.innerWidth >= 992
);

   useEffect(() => {
  if (window.innerWidth <= 992) {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [sidebarOpen]);


    return (
        <div className="app-layout">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className="content-area">
                <Header
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />

                <div className="page-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;