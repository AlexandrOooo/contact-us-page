import React from "react";
import LocationIcon from "../../component/icon/LocationIcon";
import EmailIcon from "../../component/icon/EmailIcon";
import PhoneIcon from "../../component/icon/PhoneIcon";
import SocialIcon1 from "../../component/icon/SocialIcon1";
import SocialIcon2 from "../../component/icon/SocialIcon2";
import SocialIcon3 from "../../component/icon/SocialIcon3";
import { Link } from "react-router-dom";
import cl from "./index.module.scss";
import FormContact from "../../component/FormContact";

const ContactUs: React.FC = () => {
    return (
        <div className={cl.contact}>
            <h1 className={cl["contact__title"]}>Contact Us</h1>
            <p className={cl["contact__subtitle"]}>
                Any question or remarks? Just write us a message!
            </p>
            <div className={cl["contact__content"]}>
                <div className={cl["info"]}>
                    <h3 className={cl["info__title"]}>Contact Information</h3>
                    <p className={cl["info__text"]}>
                        Say something to start a live chat!
                    </p>
                    <ul className={cl["menu"]}>
                        <li className={cl["menu__item"]}>
                            <PhoneIcon></PhoneIcon>
                            <p className={cl["menu__text"]}>+1012 3456 789</p>
                        </li>
                        <li className={cl["menu__item"]}>
                            <EmailIcon></EmailIcon>
                            <p className={cl["menu__text"]}>demo@gmail.com</p>
                        </li>
                        <li className={cl["menu__item"]}>
                            <LocationIcon></LocationIcon>
                            <p className={cl["menu__text"]}>
                                132 Dartmouth Street Boston, Massachusetts 02156
                                United States
                            </p>
                        </li>
                    </ul>
                    <ul className={cl["social"]}>
                        <li className={cl["social__item"]}>
                            <Link to="/">
                                <SocialIcon1></SocialIcon1>
                            </Link>
                        </li>
                        <li className={cl["social__item"]}>
                            <Link to="/">
                                <SocialIcon2></SocialIcon2>
                            </Link>
                        </li>
                        <li className={cl["social__item"]}>
                            <Link to="/">
                                <SocialIcon3></SocialIcon3>
                            </Link>
                        </li>
                    </ul>
                    <div className={cl["info__decorate"]}>
                        <div className={cl["small-circle"]}></div>
                        <div className={cl["big-circle"]}></div>
                    </div>
                </div>
                <FormContact />
            </div>
        </div>
    );
};

export default ContactUs;
