import React from "react";
import Tip from "./Tip";

export default function Tips() {
    return (
        <section className="tips">
            <div className="container tips-wrapper">
                <h2>Tips</h2>
                <Tip />
                <Tip />
                <Tip />
            </div>
        </section>
    )
}