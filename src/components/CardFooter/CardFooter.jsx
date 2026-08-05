import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeadFooter from "../HeadFooter/HeadFooter";

export default function CardFooter({ nameHead, nameLink }) {
  return (
    <React.Fragment>
      <div className="space-y-6">
        <HeadFooter nameHead={nameHead}/>
        <div className="flex flex-col gap-3">
          {nameLink.map((element) => {
            return (
              <div className="group flex cursor-pointer items-center overflow-hidden text-sm text-neutral-500 hover:text-orange-500">
                <FontAwesomeIcon
                  className="baseTransition relative translate-x-5 group-hover:translate-x-0"
                  icon={faAngleLeft}
                />
                <span className="baseTransition translate-x-3 group-hover:-translate-x-2">
                  {element}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
