import React, { useState } from "react";
import CartIcon from "../icon/CartIcon";
import UserIcon from "../icon/UserIcon";
import LogoHereIcon from "../icon/LogoHereIcon";
import BurgerIcon from "../icon/BurgerIcon";
import cl from "./Header.module.scss";
import Burger from "./Burger";
import HeaderMenu from "./HeaderMenu";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //click handler for menu visibility
    const handleMenuClick = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
    return (
        <>
            {/* header layout */}
            <header className={cl.header}>
                <LogoHereIcon classBtn={cl["header__logo"]}></LogoHereIcon>
                <div className={cl["burger-menu"]}>
                    <BurgerIcon
                        classBtn={cl["burger__btn"]}
                        onClickMenu={handleMenuClick}
                    />
                    {/* conditional rendering */}
                    {isMenuOpen && (
                        <Burger handleMenuClick={handleMenuClick}></Burger>
                    )}
                </div>
                <nav className={cl["header__nav"]}>
                    <HeaderMenu></HeaderMenu>
                    <CartIcon classIcon={cl["header__cart"]}></CartIcon>
                    <UserIcon></UserIcon>
                </nav>
            </header>
        </>
    );
};

export default Header;
