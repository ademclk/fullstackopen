import React from "react";

const PersonList = ({persons}) => {
    return (
        persons.map(p => {
            return <li key={p.id}>{p.name} {p.phone}</li>
        })
    )
}

export default PersonList;