import React from "react";
import MSicon from "../../Assets/ms_icon.png"

function MsIcon() {
    return (
        <div>
            <img src={MSicon} alt="MS logo"
            className="img-fluid"
            style={{ width: "40px", position: "relative", top: "13px"}}
            />
        </div>
    );

}

export default MsIcon;