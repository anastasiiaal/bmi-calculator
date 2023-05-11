import React from "react";

export default function Result () {
    return (
        <section className="result">
            <div className="container flex items-center gap-28">
                <div className="result-image">
                    <img src="./src/assets/img/image-man-eating.webp" alt="Man eating" />
                </div>
                <div className="result-text mt-20">
                    <h2 className="mb-8">What your BMI result means</h2>
                    <p className="text">
                        A BMI range of 18.5 to 24.9 is considered a "healthy weight". Maintaining a halthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
                    </p>
                </div>
            </div>
        </section>
    )
}