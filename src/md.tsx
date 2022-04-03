import remarkGfm from "remark-gfm";
import React, {ReactNode} from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function Markdown(content: string) {
    return <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
            a: ({ href, children }: { href?: string, children: ReactNode, }) =>
                <Link href={href || "#"}>
                    <a target={href?.startsWith("http") ? "_blank" : "_self"}>
                        {children}
                    </a>
                </Link>
        }}
    />
}
