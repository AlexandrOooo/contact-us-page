import React, { useState } from "react";
import CartIcon from "../icon/CartIcon";
import UserIcon from "../icon/UserIcon";
import LogoHereIcon from "../icon/LogoHereIcon";
import BurgerIcon from "../icon/BurgerIcon";
import cl from "./Header.module.scss";
import { Link } from "react-router-dom";
import CloseIcon from "../icon/CloseIcon";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    return (
        <>
            <header className={cl.header}>
                <LogoHereIcon classBtn={cl["header__logo"]}></LogoHereIcon>
                <div className={cl["burger-menu"]}>
                    <BurgerIcon
                        classBtn={cl["burger__btn"]}
                        onClickMenu={handleMenuClick}
                    />

                    {isMenuOpen && (
                        <div className={cl["overlay"]}>
                            <LogoHereIcon
                                classBtn={cl["overlay__logo"]}
                            ></LogoHereIcon>
                            <ul className={cl["menu"]}>
                                <li className={cl["menu__item"]}>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li className={cl["menu__item"]}>
                                    <Link to={"/"}>Features</Link>
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
                                <CartIcon
                                    classIcon={cl["overlay__icon"]}
                                ></CartIcon>
                                <UserIcon
                                    classIcon={cl["overlay__icon"]}
                                ></UserIcon>
                            </div>
                            <CloseIcon
                                onClickMenu={handleMenuClick}
                                closeIcon={cl["overlay__close"]}
                            ></CloseIcon>
                        </div>
                    )}
                </div>
                <nav className={cl["header__nav"]}>
                    <ul className={cl["header__menu"]}>
                        <li className={cl["header__item"]}>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className={cl["header__item"]}>
                            <Link to={"/"}>Features</Link>
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
                    <CartIcon classIcon={cl["header__cart"]}></CartIcon>
                    <UserIcon></UserIcon>
                </nav>
            </header>
        </>
    );
};

export default Header;
