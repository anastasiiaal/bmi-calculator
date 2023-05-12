import React, { useState } from "react"

export default function Calculator() {
    const [userData, setUserData] = useState({
        units: "metric",
        height: "",
        weight: ""
    })

    let height;
    let weight;

    if (userData.units == "metric") {
        height = "cm"
        weight = "kg"
    } else {
        height = "ft"
        weight = "lbs"
    }

    function handleChange(event) {
        const {name, value} = event.target
        setUserData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function calculateBMI() {
        if (userData.height && userData.weight) {
            console.log(userData.weight / ((userData.height/100)*(userData.height/100)));
        }
    }

    console.log(userData);
    calculateBMI()

    return (
        <div className="calculator w-[565px] lg:w-[100%]">
            <h3>Enter your details below</h3>
            <form>
                <fieldset className="flex justify-between gap-8 my-8">
                    <div className="radio-wrapper">
                        <input
                            type="radio"
                            id="metric"
                            name="units"
                            value="metric"
                            onChange={handleChange}
                            checked={userData.units === "metric"}
                            className="mr-5"
                        />
                        <label htmlFor="metric">Metric</label>
                    </div>

                    <div className="radio-wrapper">
                        <input
                            type="radio"
                            id="imperial"
                            name="units"
                            value="imperial"
                            onChange={handleChange}
                            checked={userData.units === "imperial"}
                            className="mr-5"
                        />
                        <label htmlFor="imperial">Imperial</label>
                    </div>
                </fieldset>
                <div className="inputs flex gap-8 justify-between sm:flex-col">
                    <div className="input-wrapper w-[50%] sm:w-[100%]">
                        <label htmlFor="height">Height</label>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            placeholder="0"
                            onChange={handleChange}
                            value={userData.height}
                        />
                        <h3 className="measure-unit">{height}</h3>
                    </div>
                    <div className="input-wrapper w-[50%] sm:w-[100%]">
                        <label htmlFor="weight">Weight</label>
                        <input
                            type="number"
                            id="weight"
                            name="weight"
                            placeholder="0"
                            onChange={handleChange}
                            value={userData.weight}
                        />
                        <h3 className="measure-unit">{weight}</h3>
                    </div>
                </div>
            </form>
            <div className="calculator__result">
                <h3 className="mb-6">Welcome!</h3>
                <p className="result__text">Enter your height and weight and you'll see your BMI result here</p>
            </div>
            {/* <div className="calculator__result flex items-center justify-between sm:flex-col sm:items-start sm:gap-8">
                <div>
                    <p className="result__text">Your BMI is...</p>
                    <h2 className="mt-6">23.4</h2>
                </div>
                <p className="result__text w-[250px] pr-8 sm:w-[100%] sm:pr-0">Your BMI suggests that you have a healthy weight. Your ideal weight is between <span>55.6kgs - 60.3kgs</span></p>
            </div> */}
        </div>
    )
}