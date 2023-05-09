import React from "react";
import Calculator from "./Calculator";

export default function Frontpage () {
    return (
        <section className="frontpage">
            <div className="container">
                <nav>
                    <div className="logo">
                        <img src="./src/assets/img/logo.svg" alt="Logo" />
                    </div>
                </nav>
                <div className="frontpage-wrapper">
                    <div className="intro-text">
                        <h1>Body Mass <br /> Index Calculator</h1>
                        <p className="text">
                            Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not he sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                        </p>
                    </div>
                    <Calculator />
                </div>
            </div>
        </section>
    )
}