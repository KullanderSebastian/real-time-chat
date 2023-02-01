import React from "react";
import defaultProfileImg from "../img/defaultPicture.svg";
import { MdModeEdit } from "react-icons/md";




const styles = {
    image: {
        width: "125px",
    },
    editPicture: {
        backgroundColor: "#4267B2",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        margin: "0 auto",
        position: "relative",
        top: "-38px",
        left: "34px",
        cursor: "pointer",
        border: "2px solid white",
    },
    editIcon: {
        marginTop: "4px",
        marginLeft: "1px",
        color: "white",
        fontSize: "26px"
    }
}

function Profile() {
    return (
        <div>
            <div>
                <h1>John Doe</h1>
                <div>
                    <img style={styles.image} src={defaultProfileImg} alt="profilePicture"/>
                    <div style={styles.editPicture}>
                        <MdModeEdit style={styles.editIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
