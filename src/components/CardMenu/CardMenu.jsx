import { faArrowLeftLong, faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/index.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function CardMenu({
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
      <Link to={`/blogDetails/${id}`} className="baseTransition flex max-md:flex-col border group hover:border-orange-500/30 border-neutral-800 rounded-2xl overflow-hidden">
        <div className="overflow-hidden relative w-full md:w-72 lg:w-80 h-52 md:h-auto">
          <img
            src={image}
            alt={role}
            className="max-md:object-cover group-hover:scale-103 baseTransition size-1/1"
          />

          <div className="absolute baseTransition inset-0 bg-linear-to-l from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100">

          </div>
        </div>

        <div className="max-md:w-full md:w-2/3 gap-3 grow flex flex-col justify-between p-6 bg-neutral-900">
          <div className="flex items-center gap-3">
            <span className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-0.5 text-sm font-semibold text-orange-500">
              {category}
            </span>
            <p className="text-neutral-500">
              {" "}
              <FontAwesomeIcon className="me-1" icon={faClock} /> {readTime}
            </p>
            <p className="text-neutral-500">
              <FontAwesomeIcon className="me-1" icon={faCalendar} />
                {date}
            </p>
          </div>

          <h3 className="font-bold text-xl lg:text-2xl baseTransition text-white group-hover:text-orange-500">{title}</h3>

          <p className="text-neutral-500 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-3">
              <img
              className="size-10 object-cover rounded-full"
                src={avatar}
                alt={role}
              />
              <div>
                <h4 className="text-sm leading-5 font-semibold text-white">{name}</h4>
                <p className="text-xs text-neutral-500">{role}</p>
              </div>
            </div>

            <span className="text-orange-500 text-sm flex items-center gap-2 group-hover:gap-3 baseTransition font-[600] leading-5">
              اقرأ المقال <FontAwesomeIcon icon={faArrowLeftLong} className="" />
            </span>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
