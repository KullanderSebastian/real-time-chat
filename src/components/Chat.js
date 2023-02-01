import React from "react";
import defaultProfileImg from "../img/defaultPicture.svg";

const styles = {
    chatWrapper: {
        width: "70vw",
        height: "100vh",
        backgroundColor: "red",
        margin: "0 auto",
        display: "flex",
    },
    chatSidePanel: {
        height: "100vh",
        width: "30%",
        backgroundColor: "green",
    },
    chatPanel: {
        height: "100vh",
        width: "70%",
        backgroundColor: "purple",
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
    users: {
    },
    count: {
    }
}

function Chat() {
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

                </div>
            </div>
        </div>
    );
}

export default Chat;
