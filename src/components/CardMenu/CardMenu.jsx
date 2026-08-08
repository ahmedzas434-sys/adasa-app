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
  const convertDate = new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
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
        className="baseTransition group flex overflow-hidden rounded-2xl border border-neutral-800 hover:border-orange-500/30 max-md:flex-col"
      >
        <div className="relative h-52 w-full overflow-hidden md:h-auto md:w-72 lg:w-80">
          <img
            src={image}
            alt={role}
            className="baseTransition size-1/1 group-hover:scale-103 max-md:object-cover"
          />

          <div className="baseTransition absolute inset-0 bg-linear-to-l from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100"></div>
        </div>

        <div className="flex grow flex-col justify-between gap-3 bg-neutral-900 p-6 max-md:w-full md:w-2/3">
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
              {convertDate}
            </p>
          </div>

          <h3 className="baseTransition text-xl font-bold text-white group-hover:text-orange-500 lg:text-2xl">
            {title}
          </h3>

          <p className="leading-relaxed text-neutral-500">{excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                className="size-10 rounded-full object-cover"
                src={avatar}
                alt={role}
              />
              <div>
                <h4 className="text-sm leading-5 font-semibold text-white">
                  {name}
                </h4>
                <p className="text-xs text-neutral-500">{role}</p>
              </div>
            </div>

            <span className="baseTransition flex items-center gap-2 text-sm leading-5 font-[600] text-orange-500 group-hover:gap-3">
              اقرأ المقال{" "}
              <FontAwesomeIcon icon={faArrowLeftLong} className="" />
            </span>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
