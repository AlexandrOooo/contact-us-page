import React from "react";
import cl from "./index.module.scss";
import FormContact from "../../component/FormContact";
import ContactInfo from "../../component/ContactInfo";

const ContactUs: React.FC = () => {
    return (
        <div className={cl.contact}>
            <h1 className={cl["contact__title"]}>Contact Us</h1>
            <p className={cl["contact__subtitle"]}>
                Any question or remarks? Just write us a message!
            </p>
            <div className={cl["contact__content"]}>
                <ContactInfo />
                <FormContact />
            </div>
        </div>
    );
};

export default ContactUs;
