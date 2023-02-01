import React from "react";

export default function Slider({ srcs }: { srcs: string[] }) {
    return (
        <section className="l-header-region row">
            <div className="large-12 columns home-splash-image">
                <section className="block block-nivo-slider block-nivo-slider-nivo-slider header">
                    <div className="slider-wrapper theme-light">
                        <div className="ribbon"></div>
                        <div className="nivoSlider" id="slider">{
                            srcs.map((src, idx) =>
                                <img
                                    id={`slide-${idx}`} key={`${idx}`} data-thumb={src} src={src}
                                    alt="" title="" typeof="foaf:Image" data-transition="" className="slide"
                                />
                            )
                        }</div>
                    </div>
                </section>
            </div>
        </section>
    )
}
