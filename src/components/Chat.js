import React from "react";
import defaultProfileImg from "../img/defaultPicture.svg";
import { useFormik } from "formik";
import { messageSchema } from "../schemas";
import Message from "./Message";

const onSubmit = (values) => {
    console.log(values);
}

const styles = {
    chatWrapper: {
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
    },
    chatSidePanel: {
        height: "100vh",
        width: "30%",
        backgroundColor: "#083855",
    },
    chatPanel: {
        height: "100vh",
        width: "70%",
        backgroundColor: "white",
    },
    image: {
        width: "125px",
        marginTop: "2em",
    },
    profileName: {

    },
    usersDisplay: {
        width: "70%",
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
        marginTop: "2em",
        backgroundColor: "gray",
    },
    messageForm: {
        position: "fixed",
        display: "flex",
        bottom: "0",
        left: "30%",
        marginBottom: "0.5em",
        marginLeft: "1em",
        width: "68%",
        justifyContent: "space-between",
    },
    input: {
        width: "90%",
        padding: "11px",
        borderRadius: "5px"
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
        width: "9%",
    }
}

function Chat() {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            message: ""
        },
        validationSchema: messageSchema,
        onSubmit
    });

    return (
        <div>
            <div style={styles.chatWrapper}>
                <div style={styles.chatSidePanel}>
                    <img style={styles.image} src={defaultProfileImg} alt="profilePicture"/>
                    <div style={styles.profileName}>
                        <h2>John Doe</h2>
                    </div>
                    <div style={styles.usersDisplay}>
                        <p style={styles.users}>Users</p>
                        <p style={styles.count}>8</p>
                    </div>
                </div>
                <div style={styles.chatPanel}>
                    <Message alias="John Doe" time="19:39" message="Hej hur mår ni?" />
                    <Message alias="Jane Doe" time="19:45" message="Bra! Tack som frågar." />
                    <Message alias="Jonas Doen" time="19:59" message="Nice." />
                </div>
                <form style={styles.messageForm}>
                    <input
                        style={styles.input}
                        id="message"
                        name="message"
                        type="text"
                        onChange={handleChange}
                        value={values.message}
                    />
                    <button type="submit" style={styles.button}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;
