import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./page/ContactUs";
import MainLayout from "./component/MainLayout";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<ContactUs />} />
            </Route>
        </Routes>
    );
};

export default App;
