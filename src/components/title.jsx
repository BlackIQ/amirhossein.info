import React from "react";

const Title = (props) => {
    return (
        <div>
            <h1 className="itext">
                {props.title}
                &nbsp;
                <span className="desc">{props.desc}</span>
            </h1>
            <br />
        </div>
    );
}

export default Title;
