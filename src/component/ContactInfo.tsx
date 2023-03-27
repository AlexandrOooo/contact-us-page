import React from "react";
import LocationIcon from "./icon/LocationIcon";
import EmailIcon from "./icon/EmailIcon";
import PhoneIcon from "./icon/PhoneIcon";
import SocialIcon1 from "./icon/SocialIcon1";
import SocialIcon2 from "./icon/SocialIcon2";
import SocialIcon3 from "./icon/SocialIcon3";
import { Link } from "react-router-dom";
import cl from "../page/ContactUs/index.module.scss";
const ContactInfo: React.FC = () => {
    return (
        //  layout of contact markings
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
                        132 Dartmouth Street Boston, Massachusetts 02156 United
                        States
                    </p>
                </li>
            </ul>
            {/* layout of social media markup */}
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
            {/* circles */}
            <div className={cl["info__decorate"]}>
                <div className={cl["small-circle"]}></div>
                <div className={cl["big-circle"]}></div>
            </div>
        </div>
    );
};

export default ContactInfo;
