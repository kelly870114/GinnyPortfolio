import React from "react";
import Micronicon from "../../Assets/micron_icon.png"

function MicronIcon() {
    return (
        <div>
            <img src={Micronicon} alt="Micron logo"
            className="img-fluid"
            style={{ width: "50px", position: "relative", top: "16px"}}
            />
        </div>
    );

}

export default MicronIcon;