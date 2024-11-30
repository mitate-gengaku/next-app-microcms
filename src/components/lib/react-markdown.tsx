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

interface Props {
  content: string; 
}

export const Markdown = ({ content }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [blocks, setBlocks] = useState<IBlock[]>([]);
  const [y, setY] = useState<number>(0)
  const [current, setCurrent] = useState<number>(0);
  
  const lenis = useLenis(({ scroll }) => {
    setY(Math.ceil(scroll))
  });

  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2');
      let arrs: IBlock[] = []

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
  }, [content]);

  useEffect(() => {
    const scroll = lenis?.scroll || 0;
    const direction = lenis?.direction;

    if (direction === 1) {
      blocks.forEach((block, i) => {
        if (scroll >= block.offsetTop) {
          setCurrent(i)
        }
      })
    } else if (direction === -1) {
      blocks.forEach((block, i) => {
        if (scroll < block.offsetTop) {
          setCurrent(i - 1)
        }
      })
    } else if (scroll === 0) {
      setCurrent(0)
    }
  }, [y])

  return (
    <div
      className="w-full mb-12 relative"
      ref={contentRef}
      >
      <Toc
        blocks={blocks} 
        current={current}
        y={y}
        />
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkBreaks,
        ]}
        rehypePlugins={[
          rehypeSlug,
          rehypeRaw
        ]}
        className={"prose prose-base lg:prose-xl dark:prose-invert max-w-none w-full md:w-8/12"}
        >
        {content}
      </ReactMarkdown>
    </div>
  )
}
