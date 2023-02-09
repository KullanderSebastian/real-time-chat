import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useNavigate, Link } from "react-router-dom";

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
        cursor: "pointer",
        marginBottom: "20px"
    },
    error: {
        marginBottom: "20px",
    },
    pageTitle: {
        marginTop: "1.5em",
        marginBottom: "0.5em",
    }
}

async function loginUser(credentials) {
    return fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function LoginForm() {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const data = await loginUser({
            username: values.username,
            password: values.password
        });

        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("roles", data.roles);
        navigate("/");
    }

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit
    });

    return (
        <div>
            <h1 style={styles.pageTitle}>Login</h1>
            <form style={styles.formContainer} onSubmit={handleSubmit}>
                <label style={styles.label} htmlFor="username">Username</label>
                <input
                    style={styles.input}
                    id="username"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    value={values.username}
                    className={errors.username && touched.usernamee ? "input-error" : ""}
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
                <button style={styles.button} type="submit">Login</button>
                <p>No account? Create one <Link to="/register">here</Link>.</p>
            </form>
        </div>
    );
}

export default LoginForm;
