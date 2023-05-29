import React from "react";
import Link from "next/link";
import A from "next-utils/a";

export default function Footer() {
    return (
        <footer className="l-footer panel row" role="contentinfo">
            <div className="footer large-12 columns">
                <section className="block block-menu-block block-menu-block-2">
                    <div className="menu-block-wrapper menu-block-2 menu-name-menu-footer-main parent-mlid-0 menu-level-1">
                        <ul className="menu">
                            <li className="first leaf">
                                <Link href="/about">about</Link>
                            </li>
                            <li className="leaf">
                                <Link href="/projects">projects</Link>
                            </li>
                            <li className="leaf">
                                <Link href="/events">events</Link>
                            </li>
                            <li className="leaf">
                                <Link href="/news">news</Link>
                            </li>
                            <li className="leaf">
                                <Link href="/support">support</Link>
                            </li>
                            <li className="leaf">
                                <Link href="/resources">resources</Link>
                            </li>
                            <li className="last leaf">
                                <Link href="/contact-us">contact</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="block block-block site-info block-block-7">
                    <div className="site-credits">
                        site by <A href="https://designsprawl.com/">design sprawl</A> and <A href={"https://neighbor-ryan.org"}>Neighbor Ryan</A>
                    </div>
                </section>
            </div>
            <div className="copyright large-12 columns">
                <span>© 2023 bikejc</span>
            </div>
        </footer>
    )
}
