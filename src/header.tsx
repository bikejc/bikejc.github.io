import Slider from "./slider";
import React from "react";
import {BigMenu, SmallMenu} from "./menus";
import Banner from "./banner";

export default function Header({ path, banners }: { path: string, banners: string[] }) {
    return (
        <header className="l-header" role="banner">
            <SmallMenu />
            <BigMenu path={path} />
            {
                banners.length > 1
                    ? <Slider srcs={banners} />
                    : <Banner src={banners[0]} />
            }
        </header>
    )
}
