import React from "react";

export default function Tips({ tips }) {
    const tipsElements = tips.map((tip) => {
        return (
            <div className="tip lg:flex lg:items-center lg:gap-8 sm:block" key={tip.id}>
                <img src={`./src/assets/icons/${tip.img}`} alt={tip.heading} />
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