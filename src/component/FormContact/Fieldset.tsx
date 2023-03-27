import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import cl from "./Form.module.scss";

interface FieldsetProps {
    name: string;
    label: string;
    classSize?: string;
    placeholder?: string;
}
const Fieldset: React.FC<FieldsetProps> = ({
    name,
    label,
    classSize,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div
            className={cl[`${classSize}`]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            <label
                // conditional rendering
                className={
                    isFocused
                        ? cl["fieldset__label"] + " " + cl["active"]
                        : cl["fieldset__label"]
                }
                htmlFor={name}
            >
                {label}
            </label>
            <Field
                className={cl["fieldset__input"]}
                id={name}
                name={name}
                {...rest}
            />
            <ErrorMessage name={name} />
        </div>
    );
};

export default Fieldset;
