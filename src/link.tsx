export function Ext({ text, href, title }: {
    text: string
    href: string
    title?: string
}) {
    return <a href={href} title={title} target="_blank" rel="noreferrer">{text}</a>
}
