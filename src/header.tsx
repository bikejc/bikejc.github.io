import Slider from "./slider";
import React from "react";
import {BigMenu, SmallMenu} from "./menus";
import Banner from "./banner";
import {Img} from "./img";

export default function Header({ path, banners }: { path: string, banners: Img[] }) {
    return (
        <header className="l-header" role="banner">
            <SmallMenu />
            <BigMenu path={path} />
            {
                banners.length > 1
                    ? <Slider imgs={banners} />
                    : <Banner {...banners[0]} />
            }
        </header>
    )
}
