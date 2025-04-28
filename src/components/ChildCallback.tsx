import React from "react";

const ChildCallback = ({calc}) => {
    return (
        <>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => calc("+")}>+</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => calc("-")}>-</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => calc("*")}>*</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => calc("/")}>/</button>
        </>
    )
};

export default React.memo(ChildCallback);