import React from "react";

export type Breadcrumb = {
    href: string
    text: string
}

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
    return (
        breadcrumbs.length ? (
            <>
                <h2 className="element-invisible">You are here</h2>
                <ul className="breadcrumbs">{
                    breadcrumbs.map(
                        ( { href, text }, idx) => {
                            return (
                                <li key={href} className={idx + 1 == breadcrumbs.length ? "current" : ""}>
                                    <a href={href}>{text}</a>
                                </li>
                            )
                        }
                    )
                }</ul>
            </>
        ) : null
    )
}
