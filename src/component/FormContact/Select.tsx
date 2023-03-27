import React from "react";
import { Field } from "formik";
import cl from "./Form.module.scss";
const Select: React.FC = () => {
    // layout of select
    return (
        <>
            <p className={cl["select__title"]}>Select Subject?</p>
            <div
                className={cl["select__options"]}
                role="group"
                aria-labelledby="my-radio-group"
            >
                <label className={cl["select__label"]}>
                    <Field
                        className={cl["select__option"]}
                        type="radio"
                        name="picked"
                        value="One"
                    />
                    General Inquiry
                </label>
                <label className={cl["select__label"]}>
                    <Field
                        className={cl["select__option"]}
                        type="radio"
                        name="picked"
                        value="Two"
                    />
                    General Inquiry
                </label>
                <label className={cl["select__label"]}>
                    <Field
                        className={cl["select__option"]}
                        type="radio"
                        name="picked"
                        value="Three"
                    />
                    General Inquiry
                </label>
                <label className={cl["select__label"]}>
                    <Field
                        className={cl["select__option"]}
                        type="radio"
                        name="picked"
                        value="Four"
                    />
                    General Inquiry
                </label>
            </div>
        </>
    );
};

export default Select;
