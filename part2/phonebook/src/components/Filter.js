import React from "react";

const Filter = ({filter, filterHandler}) => {
    return (
        <input
            value={filter}
            onChange={filterHandler}
        />
    )
}

export default Filter;