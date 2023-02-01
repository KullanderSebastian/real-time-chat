import React from "react";
import "./../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerSchema } from "../schemas";

const onSubmit = (values) => {
    console.log(values);
}

const styles = {
    formContainer: {
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: "0 auto",
    },
    input: {
        marginBottom: "20px",
        padding: "10px",
        border: "2px solid black",
        borderRadius: "8px",
    },
    label: {
        display: "flex",
        justifyContent: "start",
        marginBottom: "5px",
        fontSize: "16px",
    },
    button: {
        padding: "11px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        fontWeight: 700,
        cursor: "pointer"
    },
    error: {
        marginBottom: "20px",
    }
}

function RegisterForm() {
    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            alias: "",
            email: "",
            password: "",
            passwordChecker: "",
        },
        validationSchema: registerSchema,
        onSubmit
    });

    return (
        <div>
            <h1>Create your account</h1>
            <form style={styles.formContainer} onSubmit={handleSubmit}>
                <label style={styles.label} htmlFor="alias">Alias</label>
                <input
                    style={styles.input}
                    id="alias"
                    name="alias"
                    type="text"
                    onChange={handleChange}
                    value={values.alias}
                    className={errors.alias && touched.alias ? "input-error" : ""}
                />
                {errors.alias && touched.alias ? (
                    <div style={styles.error}>{errors.alias}</div>
                ) : null}
                <label style={styles.label} htmlFor="email">Email</label>
                <input
                    style={styles.input}
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    className={errors.email && touched.email ? "input-error" : ""}

                />
                {errors.email && touched.email ? (
                    <div style={styles.error}>{errors.email}</div>
                ) : null}
                <label style={styles.label} htmlFor="password">Password</label>
                <input
                    style={styles.input}
                    id="password"
                    name="password"
                    type="text"
                    onChange={handleChange}
                    value={values.password}
                    className={errors.password && touched.password ? "input-error" : ""}

                />
                {errors.password && touched.password ? (
                    <div style={styles.error}>{errors.password}</div>
                ) : null}
                <label style={styles.label} htmlFor="passwordChecker">Password</label>
                <input
                    style={styles.input}
                    id="passwordChecker"
                    name="passwordChecker"
                    type="text"
                    onChange={handleChange}
                    value={values.passwordChecker}
                    className={errors.passwordChecker && touched.passwordChecker ? "input-error" : ""}

                />
                {errors.passwordChecker && touched.passwordChecker ? (
                    <div style={styles.error}>{errors.passwordChecker}</div>
                ) : null}
                <button style={styles.button} type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
