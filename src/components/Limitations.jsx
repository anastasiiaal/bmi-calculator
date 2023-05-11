import React from "react";

export default function Limitations({limits}) {
    const limitElements = limits.map(limit => {
        return (
            <div className="limitation" key={limit.id}>
                <div className="flex items-center mb-5 ">
                    <img src={`./src/assets/icons/${limit.img}`} alt={limit.heading} />
                    <h3 className="ml-4">{limit.heading}</h3>
                </div>
                <p className="text">{limit.text}</p>
            </div>
        )
    })
    return (
        <section className="limitations">
            <div className="container">
                <h2>Limitations of BMI</h2>
                <p className="text">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                <div className="limitations-wrapper flex justify-between flex-wrap gap-8">
                    {limitElements}
                </div>
            </div>
        </section>
    )
}