import {Children, Sitemap} from "./sitemap";
import {MenuListItem} from "./sectionMenu";
import React from "react";
import Link from "next/link";

export function SmallMenu() {
    return (
        <div className="contain-to-grid show-for-small">
            <nav className="top-bar" data-options="">
                <ul className="title-area">
                    <li className="name">
                        <h1>
                            <Link className="active" href="/" rel="home" title="Bike JC Home">Bike JC</Link>
                        </h1>
                    </li>
                    <li className="toggle-topbar menu-icon">
                        <a href="#">
                            <span>Menu</span>
                        </a>
                    </li>
                </ul>
                <section className="top-bar-section">
                    <ul className="main-nav left" id="main-menu">
                        <li className="first expanded has-dropdown about not-click">
                            <Link className="about" href="/about">About</Link>
                        </li>
                        <li className="expanded has-dropdown projects not-click">
                            <Link className="projects" href="/projects">Projects</Link>
                        </li>
                        <li className="expanded has-dropdown events not-click">
                            <Link className="events" href="/events">Events</Link>
                        </li>
                        <li className="expanded has-dropdown news not-click">
                            <Link className="news" href="/news">News</Link>
                        </li>
                        <li className="expanded has-dropdown support not-click">
                            <Link className="support" href="/support">Support</Link>
                        </li>
                        <li className="expanded has-dropdown resources not-click">
                            <Link className="resources" href="/resources">Resources</Link>
                        </li>
                        <li className="last leaf contact">
                            <Link className="contact" href="/contact-us">Contact</Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    )
}

export function BigMenu({ path }: { path: string }) {
    const topLevelItems: Children = Sitemap.children || {}
    const numTopLevels = Object.keys(Sitemap).length
    const menuListItems = Object.entries(topLevelItems).map(
        ([ name, child ], idx) => {
            if (typeof child === 'object' && 'text' in child) {
                throw new Error(`Unrecognized top-level child: ${child}`)
            }
            child = (typeof child === 'string') ? { title: child } : child
            const text = child.title
            const topLevelPath = `/${name}`
            const n = topLevelPath.length
            if (child.header === false) return null
            return (
                <MenuListItem
                    key={name}
                    idx={idx} n={numTopLevels}
                    active={
                        path == topLevelPath ||
                        (
                            path.substring(0, n) == topLevelPath
                            && path.length > n
                            && path[n] == '/'
                            && path != '/'
                        )
                    }
                    text={text}
                    href={topLevelPath}
                />
            )
        })

    return (
        <section className="row main-menu-wrapper hide-for-small">
            <div className="logo-container">
                <Link className="active" href="/" rel="home" title="Bike JC Home">
                    <img alt="Bike JC logo" className="logo" src="/files/logo.png" title="Bike JC Home" />
                </Link>
                <div className="element-invisible" id="site-name">
                    <strong>
                        <Link href="/" rel="home" title="Home">
                            <span>Bike JC</span>
                        </Link>
                    </strong>
                </div>
            </div>
            <nav className="navigation" id="main-menu" role="navigation">
                <h2 className="element-invisible">Main menu</h2>
                <ul className="links inline-list clearfix" id="main-menu-links">
                    {menuListItems}
                </ul>
            </nav>
        </section>
    )
}
