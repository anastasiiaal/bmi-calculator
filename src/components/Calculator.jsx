import React, { useState } from "react"

export default function Calculator () {
    const [userData, setUserData] = useState({})

    return (
        <div className="calculator w-[565px] lg:w-[100%]">
            <h3>Enter your details below</h3>
            {/* ...form... */}
            <div className="calculator__result">
                <h3 className="mb-6">Welcome!</h3>
                <p className="result__text">Enter your height and weight and you'll see your BMI result here</p>
            </div>
            <div className="calculator__result flex items-center justify-between sm:flex-col sm:items-start sm:gap-8">
                <div>
                    <p className="result__text">Your BMI is...</p>
                    <h2 className="mt-6">23.4</h2>
                </div>
                <p className="result__text w-[250px] pr-8 sm:w-[100%] sm:pr-0">Your BMI suggests that you have a healthy weight. Your ideal weight is between <span>55.6kgs - 60.3kgs</span></p>
            </div>
        </div>
    )
}