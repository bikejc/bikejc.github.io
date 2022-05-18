import remarkGfm from "remark-gfm";
import React, {ReactNode} from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
import {ReactMarkdownProps} from "react-markdown/lib/complex-types";
import {ElementContent} from "hast";

function sanitizeElement(elem: any): string {
    if (typeof elem === 'string') {
        return elem.toLowerCase().replaceAll(/\W/g, "-")
    } else if (elem?.value) {
        return sanitizeElement(elem.value)
    } else if (elem?.children) {
        return sanitizeElement(elem.children)
    } else {
        return elem.map(sanitizeElement).join("")
    }
}

function buildSlug(children: ElementContent[]) {
    return sanitizeElement(children)
}

const renderHeading = (props: ReactMarkdownProps) => {
    // console.log("heading:", props)
    const { node, children } = props
    const elems = node.children
    const TagName: React.FC<{}> = node.tagName as any
    if (elems.length == 0) {
        throw new Error(`No node.children found in header: ${props}, ${children}`)
    }
    const lastElem: any = elems[elems.length - 1]
    const hasVanitySlug = elems.length > 1 && lastElem.tagName == "a" && lastElem.children.length == 0
    if (hasVanitySlug) {
        const trimmedChildren = children.slice(0, children.length - 1)
        const slug: string = lastElem.properties.id
        return <a id={slug} href={`#${slug}`}><TagName>{trimmedChildren}</TagName></a>
    } else {
        // const slug: string = buildSlug(elems)
        // return <a id={slug} href={`#${slug}`}><TagName>{children}</TagName></a>
        return <TagName>{children}</TagName>
    }
}

export default function Markdown(content: string) {
    return <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
            a: ({ href, children }: { href?: string, children: ReactNode, }) =>
                <Link href={href || "#"}>
                    <a target={href?.startsWith("http") ? "_blank" : "_self"}>
                        {children}
                    </a>
                </Link>,
            h1: renderHeading,
            h2: renderHeading,
            h3: renderHeading,
            h4: renderHeading,
            h5: renderHeading,
            h6: renderHeading,
        }}
    />
}
