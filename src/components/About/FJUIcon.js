import React from "react";
import FJUicon from "../../Assets/fju_icon.png"

function FJUIcon() {
    return (
        <div>
            <img src={FJUicon} alt="FJU logo"
            className="img-fluid"
            style={{ width: "30px", position: "relative", top: "13px"}}
            />
        </div>
    );

}

export default FJUIcon;