import {ReactNode} from "react";

export function Ext({ href, title, children, }: {
    href: string
    title?: string
    children?: ReactNode
}) {
    return <a href={href} title={title} target="_blank" rel="noreferrer">{children}</a>
}
