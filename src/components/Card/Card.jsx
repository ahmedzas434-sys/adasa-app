import { faChevronLeft, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  element: {
    id,
    title,
    excerpt,
    category,
    author: { name, avatar, role },
    image,
    date,
    readTime,
  },
}) {
  return (
    <React.Fragment>
      <Link
        to={`/blogDetails/${id}`}
        onClick={() => {
          scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="relative">
          <img
            className="h-52 w-full object-cover object-top transition-all duration-500 group-hover:scale-105"
            src={image}
            alt={role}
          />
          <span className="absolute top-4 right-4 rounded-full border border-[#333333] bg-[#0a0a0a]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {category}
          </span>
        </div>

        <div className="space-y-4 p-6">
          <div className="space-y-3 border border-transparent border-b-neutral-800 pb-5">
            <div className="flex items-center gap-1 text-sm text-neutral-600">
              <FontAwesomeIcon icon={faClock} /> {readTime}{" "}
              <span className="mx-2 block size-1 rounded-full bg-neutral-600"></span>{" "}
              {date}
            </div>
            <h3 className="text-xl leading-6.25 font-bold text-white transition-all duration-500 group-hover:text-orange-500">
              {title}
            </h3>
            <p className="text-sm leading-5.75 text-neutral-400">{excerpt}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="size-9 rounded-full" src={avatar} alt={name} />
              <div>
                <h4 className="text-sm font-medium text-white">{name}</h4>
                <p className="text-[12px] text-neutral-500">{role}</p>
              </div>
            </div>

            <div className="centerByFlex size-8 rounded-full border border-orange-500/20 bg-orange-500/10 text-sm text-orange-500 transition-all duration-500 group-hover:border-transparent group-hover:bg-orange-500 group-hover:text-white">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
