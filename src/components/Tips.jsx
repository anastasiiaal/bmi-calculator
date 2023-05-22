import React from "react";
import image1 from "/src/assets/icons/icon-eating.svg"
import image2 from "/src/assets/icons/icon-exercise.svg"
import image3 from "/src/assets/icons/icon-sleep.svg"

export default function Tips({ tips }) {
    const imgArray = [image1 ,image2, image3]
    const tipsElements = tips.map((tip) => {
        return (
            <div className="tip lg:flex lg:items-center lg:gap-8 sm:block" key={tip.id}>
                <img src={imgArray[tip.id-1]} alt={tip.heading} />
                <div>
                    <h3 className="mb-6 mt-12 lg:mt-0 sm:mt-10">{tip.heading}</h3>
                    <p className="text">{tip.text}</p>
                </div>
            </div>
        )
    })
    
    return (
        <section className="tips">
            <div className="container tips-wrapper flex justify-between gap-10 lg:flex-col">
                {tipsElements}
            </div>
        </section>
    )
}