import React, {ReactNode} from "react";
import A from "next-utils/a";

export type Breadcrumb = {
    href: string
    node: ReactNode
    target?: string
}

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
    return (
        breadcrumbs.length ? (
            <>
                <h2 className="element-invisible">You are here</h2>
                <ul className="breadcrumbs">{
                    breadcrumbs.map(
                        ({ href, node }, idx) => {
                            return (
                                <li key={href} className={idx + 1 == breadcrumbs.length ? "current" : ""}>
                                    <A href={href}>{node}</A>
                                </li>
                            )
                        }
                    )
                }</ul>
            </>
        ) : null
    )
}
