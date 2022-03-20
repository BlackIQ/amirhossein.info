import React from "react";

const PersonalItems = (props) => {
    return (
        <div className="m-1">
            <small className="itext">{props.name}:</small>
            <br/>
            {props.value}
        </div>
    );
}

export default PersonalItems;
