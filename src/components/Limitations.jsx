import React from "react";
import limit1 from "/src/assets/icons/icon-gender.svg"
import limit2 from "/src/assets/icons/icon-age.svg"
import limit3 from "/src/assets/icons/icon-muscle.svg"
import limit4 from "/src/assets/icons/icon-pregnancy.svg"
import limit5 from "/src/assets/icons/icon-race.svg"

export default function Limitations({limits}) {
    const imgArr = [limit1, limit2, limit3, limit4, limit5]
    const limitElements = limits.map(limit => {
        return (
            <div className="limitation w-[356px] xl:w-[48%] lg:w-[47%] md:w-[100%]" key={limit.id}>
                <div className="flex items-center mb-5 ">
                    <img src={imgArr[limit.id-1]} alt={limit.heading} />
                    <h3 className="ml-4">{limit.heading}</h3>
                </div>
                <p className="text">{limit.text}</p>
            </div>
        )
    })
    
    return (
        <section className="limitations">
            <div className="container">
                <div className="
                    limitations-wrapper flex justify-between flex-wrap gap-8 
                    [&>*:nth-child(2)]:mr-24 
                    [&>*:nth-child(3)]:ml-[390px] 
                    [&>*:nth-child(5)]:ml-[200px] 
                    [&>*:nth-child(6)]:mr-[190px]
                    xl:[&>*:nth-child(n)]:ml-0 xl:[&>*:nth-child(n)]:mr-0
                    xl:justify-center
                ">
                    <div className="text-wrapper xl:text-center xl:mb-6">
                        <h2 className="mb-8">Limitations of BMI</h2>
                        <p className="text w-[530px] xl:w-[100%]">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
                    </div>
                    {limitElements}
                </div>
            </div>
        </section>
    )
}