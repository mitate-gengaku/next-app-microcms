"use client"

import { IBlock } from "@/types/block";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { Toc } from "@/components/posts/toc";
import { cn } from "@/utils/cn";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  content: string; 
}

export const Markdown = ({ content }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [y, setY] = useState<number>(0)
  const [direction, setDirection] = useState<1 | -1 | 0>(0);

  useLenis(({ scroll, direction }) => {
    setY(Math.ceil(scroll))
    setDirection(direction)
  })

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2');
      const arrs: IBlock[] = []

      headings.forEach((heading, i) => {
        arrs.push({
          index: i,
          id: heading.id,
          offsetTop: heading.offsetTop,
          text: heading.textContent || ""
        });
      });

      setBlocks([ ...blocks, ...arrs ]);
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div
      className="w-full mb-12 relative"
      ref={contentRef}
      >
      <Toc
        blocks={blocks} 
        direction={direction}
        y={y}
        />
      <ReactMarkdown
        components={{  
          code(props) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {children, className, node, ref, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                language={match[1]}
                style={vscDarkPlus}
                >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          }
        }}
        remarkPlugins={[
          remarkGfm,
          remarkBreaks,
        ]}
        rehypePlugins={[
          rehypeSlug,
          rehypeRaw
        ]}
        className={cn(
          "prose prose-base lg:prose-xl dark:prose-invert max-w-none w-full md:w-8/12 prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-code:bg-transparent prose-code:p-0 prose-code:m-0",
          !blocks.length && "md:w-full"
        )}
        >
        {content}
      </ReactMarkdown>
    </div>
  )
}
