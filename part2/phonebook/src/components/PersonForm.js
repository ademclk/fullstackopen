import React from "react";

const PersonForm = ({submit, nameValue, nameHandler, phoneValue, phoneHandler}) => {
    return (
        <form onSubmit={submit}>
            <div>
                name:
                <input
                    value={nameValue}
                    onChange={nameHandler}
                />
            </div>
            <div>
                phone:
                <input
                    value={phoneValue}
                    onChange={phoneHandler}
                />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    );
}

export default PersonForm;