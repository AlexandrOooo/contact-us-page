import React from "react";
import cl from "./Footer.module.scss";
import PhoneIcon from "../icon/PhoneIcon";
import EmailIcon from "../icon/EmailIcon";
import LocationIcon from "../icon/LocationIcon";
import LogoHereIcon from "../icon/LogoHereIcon";
import FotterForm from "./FooterForm";

const index: React.FC = () => {
    // footer layout
    return (
        <footer className={cl["footer"]}>
            <div className={cl["footer__img"]}>
                <LogoHereIcon />
            </div>
            <div className={cl["footer__container"]}>
                <div className={cl["footer__block"]}>
                    <h4 className={cl["footer__title"]}>Reach us</h4>
                    <ul className={cl["footer__list"]}>
                        <li className={cl["footer__item"]}>
                            <PhoneIcon />
                            <p className={cl["footer__text"]}>+1012 3456 789</p>
                        </li>
                        <li className={cl["footer__item"]}>
                            <EmailIcon />
                            <p className={cl["footer__text"]}>demo@gmail.com</p>
                        </li>
                        <li className={cl["footer__item"]}>
                            <LocationIcon />
                            <p className={cl["footer__text"]}>
                                132 Dartmouth Street Boston, Massachusetts 02156
                                United States
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={cl["footer__block"]}>
                    <h4 className={cl["footer__title"]}>Company</h4>
                    <ul className={cl["footer__list"]}>
                        <li className={cl["footer__text"]}>About</li>
                        <li className={cl["footer__text"]}>Contact</li>
                        <li className={cl["footer__text"]}>Blogs</li>
                    </ul>
                </div>
                <div className={cl["footer__block"]}>
                    <h4 className={cl["footer__title"]}>Legal</h4>
                    <ul className={cl["footer__list"]}>
                        <li className={cl["footer__text"]}>Privacy Policy</li>
                        <li className={cl["footer__text"]}>Terms & Services</li>
                        <li className={cl["footer__text"]}>Terms of Use</li>
                        <li className={cl["footer__text"]}>Refund Policy</li>
                    </ul>
                </div>
                <div className={cl["footer__block"]}>
                    <h4 className={cl["footer__title"]}>Quick Links</h4>
                    <ul className={cl["footer__list"]}>
                        <li className={cl["footer__text"]}>Techlabz Keybox</li>
                        <li className={cl["footer__text"]}>Downloads</li>
                        <li className={cl["footer__text"]}>Forum</li>
                    </ul>
                </div>
                <FotterForm />
            </div>
        </footer>
    );
};

export default index;
