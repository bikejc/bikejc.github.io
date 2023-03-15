import React from "react";
import {Img} from "./img";

export default function Slider({ imgs }: { imgs: Img[] }) {
    return (
        <section className="l-header-region row">
            <div className="large-12 columns home-splash-image">
                <section className="block block-nivo-slider block-nivo-slider-nivo-slider header">
                    <div className="slider-wrapper theme-light">
                        <div className="ribbon" />
                        <div className="nivoSlider" id="slider">{
                            imgs.map(({src, alt}, idx) =>
                                <img
                                    id={`slide-${idx}`} key={`${idx}`} data-thumb={src} src={src}
                                    alt={alt} title="" data-transition="" className="slide"
                                />
                            )
                        }</div>
                    </div>
                </section>
            </div>
        </section>
    )
}
