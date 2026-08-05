import React from "react";

export default function HeadFooter({nameHead}) {
  return (
    <React.Fragment>
      <h6 className="flex items-center gap-2.5 text-[16px] font-semibold text-white">
        <span className="block h-0.75 w-8.5 rounded-full bg-linear-to-r from-orange-500 to-yellow-500"></span>{" "}
        {nameHead}
      </h6>
    </React.Fragment>
  );
}
