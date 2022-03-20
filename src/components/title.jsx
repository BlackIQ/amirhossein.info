import React from "react";

const Title = (props) => {
    return (
        <h1 className="itext">
            {props.title}
            &nbsp;
            <span className="desc">{props.desc}</span>
        </h1>
    );
}

export default Title;
