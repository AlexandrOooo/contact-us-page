import React from "react";
import CloseIcon from "../icon/CloseIcon";
import CartIcon from "../icon/CartIcon";
import UserIcon from "../icon/UserIcon";
import LogoHereIcon from "../icon/LogoHereIcon";
import { Link } from "react-router-dom";
import cl from "./Header.module.scss";
import ArrowDown from "../icon/ArrowDown";
interface BurgerProps {
    handleMenuClick: () => void;
}
const Burger: React.FC<BurgerProps> = ({ handleMenuClick }) => {
    return (
        // burger layout
        <div className={cl["overlay"]}>
            <LogoHereIcon classBtn={cl["overlay__logo"]}></LogoHereIcon>
            <ul className={cl["menu"]}>
                <li className={cl["menu__item"]}>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className={cl["menu__item"]}>
                    <Link to={"/"}>
                        Features
                        <ArrowDown />
                    </Link>
                    {/* drop-down list */}
                    <ul className={cl["mini-menu"]}>
                        <li className={cl["mini-item"]}>Contact Us</li>
                        <li className={cl["mini-item"]}>Contact Us</li>
                    </ul>
                </li>
                <li className={cl["menu__item"]}>
                    <Link to={"/"}>Blog</Link>
                </li>
                <li className={cl["menu__item"]}>
                    <Link to={"/"}>Shop</Link>
                </li>
                <li className={cl["menu__item"]}>
                    <Link to={"/"}>About</Link>
                </li>
                <li className={cl["menu__item"]}>
                    <Link to={"/"}>Contact</Link>
                </li>
            </ul>
            <div className={cl["overlay__social"]}>
                <CartIcon classIcon={cl["overlay__icon"]}></CartIcon>
                <UserIcon classIcon={cl["overlay__icon"]}></UserIcon>
            </div>
            <CloseIcon
                onClickMenu={handleMenuClick}
                closeIcon={cl["overlay__close"]}
            ></CloseIcon>
        </div>
    );
};

export default Burger;
