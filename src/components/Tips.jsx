import React from "react";

export default function Tips({ tips }) {
    const tipsElements = tips.map((tip) => {
        return (
            <div className="tip" key={tip.id}>
                <img src={`./src/assets/icons/${tip.img}`} alt={tip.heading} />
                <h3 className="mt-12 mb-7">{tip.heading}</h3>
                <p className="text">{tip.text}</p>
            </div>
        )
    })
    
    return (
        <section className="tips">
            <div className="container tips-wrapper flex justify-between gap-10">
                {tipsElements}
            </div>
        </section>
    )
}