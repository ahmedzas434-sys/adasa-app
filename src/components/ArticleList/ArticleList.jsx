import React from "react";

export default function ArticleList({number,name,href}) {
  return (
    <React.Fragment>
      <a href={`#${href}`} className="group flex items-center gap-3 rounded-xl p-3 text-sm text-neutral-400 transition-all duration-300 hover:bg-orange-500/5 hover:text-orange-500">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1a1a1a] text-xs font-bold text-neutral-500 transition-colors group-hover:bg-orange-500/10 group-hover:text-orange-500">
          {number}
        </span>
      {name}
      </a>
    </React.Fragment>
  );
}
