import React, {ReactNode} from "react";
import {Breadcrumb} from "./breadcrumbs";

export function MenuListItem({ idx, n, active, node, href, target, }: {
    idx: number
    n: number
    active: boolean
    node: ReactNode
    href: string
    target?: string
}) {
    let classes = []
    let linkClasses = []
    if (idx == 0) {
        classes.push("first")
    }
    classes.push("leaf")
    if (active) {
        classes.push("active")
        classes.push("active-trail")
        linkClasses.push("active")
        linkClasses.push("active-trail")
    }
    if (idx + 1 == n) {
        classes.push("last")
    }
    return (
        <li className={classes.join(" ")}>
            <a href={href} target={target} className={linkClasses.join(" ")}>{node}</a>
        </li>
    )
}

export type SectionMenu = {
    title: ReactNode
    activePath?: string
    breadcrumbs: Breadcrumb[]
}

export function SectionMenu({ title, activePath, breadcrumbs }: SectionMenu) {
    const numBreadcrumbs = breadcrumbs.length
    return (
        <>
            <h2 className="block-title">{title}</h2>
            <div className="menu-block-wrapper menu-block-1 menu-name-main-menu parent-mlid-0 menu-level-2">
                <ul className="menu">{
                    breadcrumbs.map(({ href, node, target, }, idx) =>
                        <MenuListItem
                            key={href}
                            idx={idx} n={numBreadcrumbs}
                            active={!!activePath && href == activePath}
                            node={node}
                            href={href}
                            target={target}
                        />
                    )
                }</ul>
            </div>
        </>
    )
}
