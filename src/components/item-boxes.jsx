import React from "react";

const ItemBoxes = (props) => {
    const items = props.items;

    return (
        <div className="m-1">
            <h4 className="itext">
                {props.title}
            </h4>
            <hr className="itext"/>
            <ul>
                {
                    items.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    );
}

export default ItemBoxes;
