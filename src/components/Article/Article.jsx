import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Article.css"
import React from "react";

export default function Article({ isIcon, textOne, hText, spanText, pText }) {
  return (
    <React.Fragment>
      <article className="relative text-blue-700 text-center space-y-6 px-3">
        <div className="centerByFlex inline-flex px-4 py-2 gap-2 bg-orange-500/10 text-orange-500 border border-orange-500/50 rounded-full text-sm font-medium">
          <span className="opacityElementStyle size-1.5"></span>
          {isIcon ? (
            <FontAwesomeIcon icon={faNewspaper} />
          ) : (
            <span className="opacityElementStyle size-2"></span>
          )}{" "}
          {textOne}
        </div>
        <h2 className="font-bold text-4xl md:text-5xl md:leading-12 text-white">
          {hText}{" "}
          <span className="bg-linear-135 from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            {spanText}
          </span>
        </h2>
        <p className="text-xl text-neutral-400">{pText}</p>
      </article>
    </React.Fragment>
  );
}
