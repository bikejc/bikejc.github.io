import React from "react";

export default function Footer() {
    return (
        <footer className="l-footer panel row" role="contentinfo">
            <div className="footer large-12 columns">
                <section className="block block-menu-block block-menu-block-2">
                    <div className="menu-block-wrapper menu-block-2 menu-name-menu-footer-main parent-mlid-0 menu-level-1">
                        <ul className="menu">
                            <li className="first leaf">
                                <a href="/about">about</a>
                            </li>
                            <li className="leaf">
                                <a href="/projects">projects</a>
                            </li>
                            <li className="leaf">
                                <a href="/events">events</a>
                            </li>
                            <li className="leaf">
                                <a href="/news">news</a>
                            </li>
                            <li className="leaf">
                                <a href="/support">support</a>
                            </li>
                            <li className="leaf">
                                <a href="/resources">resources</a>
                            </li>
                            <li className="last leaf">
                                <a href="/contact-us">contact</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="block block-block site-info block-block-7">
                    <div className="site-credits">
                        site by <a href="http://www.designsprawl.com/" target="blank">design sprawl</a>
                    </div>
                </section>
            </div>
            <div className="copyright large-12 columns">
                <span> © 2022 bikejc Information likes to be shared.</span>
            </div>
        </footer>
    )
}
