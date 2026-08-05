import React from "react";
import { Link } from "react-router-dom";

export default function CardArticle({el:{id,image,category,readTime,title,author:{avatar,name}}}) {
  return (
    <React.Fragment>
      <Link to={`/blogDetails/${id}`} onClick={()=>{
        scrollTo({
          top:0,
          behavior:"smooth"
        })
      }} className="group relative overflow-hidden rounded-2xl border border-neutral-800 transition-all duration-500 hover:border-orange-500/30">
        <div className="relative overflow-hidden">
          <img
            src={image}
            className="baseTransition h-48 w-full duration-500 group-hover:scale-110"
            alt={name}
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#111111]">
            <span className="absolute top-4 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
              {category}
            </span>
          </div>
        </div>

        <div className="bg-[#111111] py-7 px-5">
          <h6 className="mb-4 line-clamp-1 text-[16px] font-bold text-white transition-colors group-hover:text-orange-500">
          {title}
          </h6>
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <img
                src={avatar}
                className="size-6 rounded-full"
                alt={name}
              />
              <p>{name}</p>
            </div>

            <p>{readTime}</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
