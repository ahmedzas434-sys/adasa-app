import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SocialCard({brand,color,to}) {
  return (
    <React.Fragment>
      {color === "" ? <a href={to} className="size-11 rounded-xl cursor-pointer baseTransition hover:text-white hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:scale-110 centerByFlex bg-neutral-900 hover:border-transparent border border-neutral-800 text-neutral-500">
        <FontAwesomeIcon className="text-xl" icon={brand} />
      </a>:<a href={to} className={`size-11 rounded-xl cursor-pointer baseTransition hover:text-white ${color} centerByFlex bg-neutral-900 hover:border-transparent border border-neutral-800 text-neutral-400`}>
        <FontAwesomeIcon className="text-lg" icon={brand} />
      </a>}
    </React.Fragment>
  );
}
