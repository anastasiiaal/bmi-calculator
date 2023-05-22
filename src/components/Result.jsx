import React from "react";
import manImg from "/src/assets/img/image-man-eating.webp"

export default function Result () {
    return (
        <section className="result">
            <div className="container flex items-center gap-28 xl:gap-16 md:flex-col md:gap-0">
                <div className="result-image w-[50%] md:w-[100%]">
                    <img src={manImg} alt="Man eating" />
                </div>
                <div className="result-text w-[50%] mt-20 md:w-[100%]">
                    <h2 className="mb-8">What your BMI result means</h2>
                    <p className="text">
                        A BMI range of 18.5 to 24.9 is considered a "healthy weight". Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
                    </p>
                </div>
            </div>
        </section>
    )
}