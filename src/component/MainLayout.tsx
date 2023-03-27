import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
    return (
        <>
            {/* layout page */}
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
