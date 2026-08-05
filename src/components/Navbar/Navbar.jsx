import React, { useState } from "react";
import image from "../../assets/images/image11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  function showMenu() {
    setIsShowMenu(!isShowMenu);
  }

  return (
    <React.Fragment>
      <nav className="fixed inset-[0_0_auto] z-99999999 border border-transparent border-b-neutral-800 bg-black px-3 md:px-4 xl:px-[10%]">
        <div className="relative flex items-center justify-between py-4 xl:container xl:mx-auto">
          <Link to="/" className="group flex cursor-pointer items-center gap-2">
            <img
              className="size-12 duration-80 group-hover:scale-105"
              src={image}
              alt="logo"
            />

            <div>
              <h1 className="bg-linear-to-r from-white to-neutral-300 bg-clip-text text-xl font-bold text-transparent">
                عدسة
              </h1>
              <span className="hidden text-xs text-orange-400/80 md:block">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="flex items-center rounded-full border border-[#262626] bg-[#161616] p-1.5 max-md:hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-5.5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`
              }
            >
              الرئيسية
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `rounded-full px-5.5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`
              }
            >
              المدونة
            </NavLink>

            <NavLink
              to="/whoAreYou"
              className={({ isActive }) =>
                `rounded-full px-5.5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`
              }
            >
              من نحن
            </NavLink>
          </div>

          <div className="flex items-center gap-3 max-md:hidden">
            <div className="centerByFlex group size-11 cursor-pointer rounded-xl border border-transparent transition hover:border-[#262626]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4.5 text-neutral-500 transition group-hover:text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            <Link
              to="/blog"
              className="btnGlobal transition hover:-translate-y-0.5"
            >
              ابدأ القراءة
            </Link>
          </div>

          <button
            onClick={showMenu}
            className="max-md:centerByFlex group size-[49.6px] cursor-pointer rounded-lg border border-transparent hover:border-[#262626] md:hidden"
          >
            <FontAwesomeIcon
              className="text-xl text-neutral-400 transition group-hover:text-white"
              icon={isShowMenu ? faX : faBars}
            />
          </button>

          <div
            className={`absolute inset-[100%_0_auto] hidden space-y-4 rounded-2xl border border-[#262626] bg-[#161616] p-4 transition-all duration-500 max-md:block ${
              isShowMenu
                ? "[clip-path:inset(0_0_0_0)]"
                : "[clip-path:inset(0_0_100%_0)]"
            }`}
          >
            <div className="flex flex-col space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-full px-5.5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                الرئيسية
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `rounded-full px-5.5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                المدونة
              </NavLink>

              <NavLink
                to="/whoAreYou"
                className={({ isActive }) =>
                  `rounded-full px-5.5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`
                }
              >
                من نحن
              </NavLink>
            </div>

            <Link
              to="/blog"
              className="btnGlobal w-full transition hover:-translate-y-0.5"
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
