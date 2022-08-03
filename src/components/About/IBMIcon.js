import React from "react";
import IBMicon from "../../Assets/ibm_icon.png"

function IBMIcon() {
    return (
        <div>
            <img src={IBMicon} alt="IBM logo"
            className="img-fluid"
            style={{ width: "40px", position: "relative", top: "16px"}}
            />
        </div>
    );

}

export default IBMIcon;