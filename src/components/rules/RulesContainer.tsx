"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import BackIcon from "../icons/backIcon";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/navigation";

interface Props {
  markdown: string;
  title: string;
}

const RulesContainer = ({ markdown, title }: Props) => {
  const router = useRouter();
  const handleClickBackIcon = () => router.back();
  return (
    <div className="px-4 w-full">
      <header
        onClick={handleClickBackIcon}
        className=" z-30 bg-foundation-secondary w-full h-14 heading-m text-content-secondary sticky top-0 flex justify-center items-center"
      >
        <div className="flex justify-center items-center w-full relative">
          {title}
          <div className=" absolute left-0">
            <BackIcon stroke="content-tertiary " />
          </div>
        </div>
      </header>
      <ReactMarkdown
        className="mt-8"
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ ...props }) => (
            <table
              className="table-fixed border-collapse border border-gray-300 w-full overflow-scroll"
              {...props}
            />
          ),
          th: ({ ...props }) => (
            <th
              className="border border-gray-300 p-2  bg-gray-100"
              {...props}
            />
          ),
          td: ({ ...props }) => (
            <td className="border border-gray-300 p-2 " {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default RulesContainer;
