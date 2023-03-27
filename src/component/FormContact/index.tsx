import React from "react";
import { Formik, Form } from "formik";
import Fieldset from "./Fieldset";
import cl from "./Form.module.scss";
import ArrowPng from "../../img/arrow.png";
import Select from "./Select";

const index: React.FC = () => {
    // form layout
    return (
        <Formik
            initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
                picked: "",
                message: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {() => (
                <Form className={cl["form-contact"]}>
                    {/* layout of inputs */}
                    <div className={cl["form-contact__mini"]}>
                        <Fieldset
                            label="First Name"
                            name="firstName"
                            placeholder="Piter"
                            classSize="mini-fieldset"
                        />
                        <Fieldset
                            label="Last Name"
                            name="lastName"
                            placeholder="Parker"
                            classSize="mini-fieldset"
                        />
                        <Fieldset
                            label="Email"
                            name="email"
                            placeholder="example@post.com"
                            classSize="mini-fieldset"
                        />
                        <Fieldset
                            label="Phone Number"
                            name="phone"
                            placeholder="+1 012 3456 789"
                            classSize="mini-fieldset"
                        />
                    </div>
                    <Select></Select>
                    <Fieldset
                        label="Message"
                        name="message"
                        placeholder="Write your message.."
                        classSize="big-fieldset"
                    />
                    <button className={cl["btn-submit"]} type="submit">
                        Send Message
                    </button>
                    <img src={ArrowPng} className={cl["image"]} alt="" />
                </Form>
            )}
        </Formik>
    );
};

export default index;
