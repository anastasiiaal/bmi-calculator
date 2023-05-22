import React from "react";
import Calculator from "./Calculator";
import logo from "/src/assets/img/logo.svg"

export default function Frontpage () {
    return (
        <section className="frontpage">
            <div className="container">
                <nav>
                    <div className="logo flex xl:justify-center">
                        <img src={logo} alt="Logo" />
                    </div>
                </nav>
                <div className="frontpage-wrapper flex xl:flex-col items-center justify-between">
                    <div className="intro-text w-[500px] xl:w-[100%] xl:text-center xl:mb-14">
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