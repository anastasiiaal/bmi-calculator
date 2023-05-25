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

    function transformHeight (unit, height) {
        if (unit == "metric") {
            return Math.round(height * 30.48 * 10)/10
        } else {
            return Math.round(height / 30.48 * 10)/10
        }
    }

    function transformWeight (unit, weight) {
        if (unit == "metric") {
            return Math.round(weight / 2.205 * 10)/10
        } else {
            return Math.round(weight * 2.205 * 10)/10
        }
    }

    function handleChange(event) {
        const {name, value} = event.target
        setUserData(prevData => {
            if (name == "units") {
                return {
                    [name]: value,
                    height: prevData.height == "" ? "" : transformHeight(value, prevData.height),
                    weight: prevData.weight == "" ? "" : transformWeight(value, prevData.weight),
                }
            } else {
                return {
                    ...prevData,
                    [name]: value
                }
            }
        })
    }

    function formulaBMI (weight, height) {    
        return (weight/(height*height)).toFixed(2)
    }

    function countPerfectWeight (bmi, height) {
        return (bmi*height*height).toFixed(1)
    }

    // function that verifies that all inputs are within correct numbers
    // avoids massive numbers calculations
    let errorMessage;
    function validateInputs (units, height, weight) {
        if (units == "metric") {
            if (height >= 50 && height <= 230 && 
                weight >= 25 && weight <= 350)
            {
                return true
            } else {
                errorMessage = "⚠️ Please make sure you use realistic numbers"
            }
        } else {
            if (height >= 1.5 && height <= 7.5 && 
                weight >= 55 && weight <= 770) 
            {
                return true
            } else {
                errorMessage = "⚠️ Please make sure you use realistic numbers"
            }
        }
    }

    let BMIresult;
    let idealWeightBottom;
    let idealWeightTop;

    // calculates BMI if all necessary data is provided && is correct
    (function calculateBMI() {
        if (userData.height && userData.weight && 
            validateInputs(userData.units, userData.height, userData.weight)
        ) {
            if (userData.units == "metric") {
                const thisHeight = userData.height / 100
                BMIresult = formulaBMI(userData.weight, thisHeight)
                idealWeightBottom = countPerfectWeight(18.5, thisHeight)
                idealWeightTop = countPerfectWeight(24.9, thisHeight)
            } else {
                const thisHeight = userData.height * 12
                const thisWeight = userData.weight * 703
                BMIresult = formulaBMI(thisWeight, thisHeight)
                idealWeightBottom = (countPerfectWeight(18.5, thisHeight) / 703).toFixed(1)
                idealWeightTop = (countPerfectWeight(24.9, thisHeight) / 703).toFixed(1)
            }
        }
    })()

    const starterTemplate = (
        <div className="calculator__result blue">
            <h3 className="mb-6">Welcome!</h3>
            <p className="result__text">Enter your height and weight and you'll see your BMI result here</p>
        </div>
    )

    let color;                  // used to apply certain class of bg
    let weightAssessment;       // string to be put inside report phrase
    let resultTemplate;         // result frame to be displayed (starter template || BMI calculations)
    if (BMIresult === undefined) {
        resultTemplate = starterTemplate
    } else {
        if (BMIresult < 18.5) {
            color = "orange"
            weightAssessment = "an insufficient weight"
        } else if (BMIresult >= 18.5 && BMIresult <= 24.99) {
            color = "green"
            weightAssessment = "a healthy weight"
        } else if (BMIresult >= 25 && BMIresult <= 29.99) {
            color = "orange"
            weightAssessment = "a slight overweight"
        } else {
            color = "red"
            weightAssessment = "a significant overweight"
        }

        resultTemplate = (
            <div className={`calculator__result flex items-center justify-between sm:flex-col sm:items-start sm:gap-8 ${color}`}>
                <div>
                    <p className="result__text">Your BMI is...</p>
                    <h2 className="mt-6">{BMIresult}</h2>
                </div>
                <p className="result__text w-[250px] pr-8 sm:w-[100%] sm:pr-0">Your BMI suggests that you have <span>{weightAssessment}</span>. Your ideal weight is between <span>{idealWeightBottom}{weight} - {idealWeightTop}{weight}</span></p>
            </div>
        )
    }

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
            {errorMessage && <h4 className="mt-4 -mb-4 text-red-600">{errorMessage}</h4>}
            {resultTemplate}
        </div>
    )
}