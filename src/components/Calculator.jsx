import React, { useState } from "react"

export default function Calculator () {
    const [userData, setUserData] = useState({})

    return (
        <div className="calculator">
            <h3>Enter your details below</h3>
            {/* ...form... */}
            <div className="calculator__result">
                <h3>Welcome</h3>
                <p className="result__text">*Some text to be generated*</p>
            </div>
        </div>
    )
}