import React from "react";
import defaultProfileImg from "../img/defaultPicture.svg";

const styles = {
    message: {
        height: "4em",
        marginTop: "1em",
        marginBottom: "1em",
        display: "flex",
    },
    chatImage: {
        width: "40px",
        marginLeft: "1em",
    },
    messageFormat: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    messageAlias: {
        textAlign: "justify",
        fontWeight: "700",
    },
    formatAliasTime: {
        display: "flex",
    },
    time: {
        marginLeft: "10px",
        fontSize: "13px",
        marginTop: "2px",
    }
}

function Message(props) {
    return (
        <div style={styles.message}>
            <img style={styles.chatImage} src={defaultProfileImg} alt="profilePicture"/>
            <div style={styles.messageFormat}>
                <div style={styles.formatAliasTime}>
                    <p style={styles.messageAlias}>{props.alias}</p>
                    <p style={styles.time}>{props.time}</p>
                </div>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Message;
