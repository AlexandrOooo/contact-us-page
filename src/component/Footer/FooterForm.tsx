import React from "react";
import { Formik, Form, Field } from "formik";
import cl from "./Footer.module.scss";
const FooterFrom: React.FC = () => {
    // layout pf footer form
    return (
        <Formik
            initialValues={{
                email: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {() => (
                <Form className={cl["form"]}>
                    <h4 className={cl["form__title"]}>Join Our Newsletter</h4>
                    <div className={cl["form__subscribe"]}>
                        <Field
                            name="email"
                            className={cl["form__input"]}
                            placeholder="Your email address"
                        ></Field>
                        <button className={cl["form__btn"]}>Subscribe</button>
                    </div>
                    <p className={cl["form__text"]}>
                        * Will send you weekly updates for your better tool
                        management.
                    </p>
                </Form>
            )}
        </Formik>
    );
};

export default FooterFrom;
