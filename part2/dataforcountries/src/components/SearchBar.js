import React from "react";

const Filter = ({filter, eventHandler}) => {
    return (
        <p> Find countries <span> </span>
            <input
                value={filter}
                onChange={eventHandler}
            />
        </p>
    )
}

export default Filter;