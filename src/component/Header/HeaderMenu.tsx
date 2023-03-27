import React from "react";
import { Link } from "react-router-dom";
import ArrowDown from "../icon/ArrowDown";
import cl from "./Header.module.scss";
const HeaderMenu: React.FC = () => {
    return (
        // header menu layout
        <ul className={cl["header__menu"]}>
            <li className={cl["header__item"]}>
                <Link to={"/"}>Home</Link>
            </li>
            <li className={cl["header__item"]}>
                <Link to={"/"}>
                    Features
                    <ArrowDown />
                </Link>
                <ul className={cl["header__mini-menu"]}>
                    <li className={cl["header__mini-item"]}>Contact Us</li>
                    <li className={cl["header__mini-item"]}>Contact Us</li>
                </ul>
            </li>
            <li className={cl["header__item"]}>
                <Link to={"/"}>Blog</Link>
            </li>
            <li className={cl["header__item"]}>
                <Link to={"/"}>Shop</Link>
            </li>
            <li className={cl["header__item"]}>
                <Link to={"/"}>About</Link>
            </li>
            <li className={cl["header__item"]}>
                <Link to={"/"}>Contact</Link>
            </li>
        </ul>
    );
};

export default HeaderMenu;
