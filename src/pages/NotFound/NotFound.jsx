import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceFrown,
  faHouse,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";

export default function NotFound() {
  return (
    <React.Fragment>
      <section className="relative min-h-[calc(100vh-104px)] bg-[#111111] text-white">
        <div className="absolute inset-0 bg-[rgb(10,10,10)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="absolute inset-0">
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"></div>
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex min-h-[calc(100vh-104px)] flex-col items-center justify-center px-6 pt-24">
          <h1 className="bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-[140px] leading-none font-black text-transparent select-none md:text-[180px]">
            404
          </h1>

          <div className="relative mb-12">
            <div className="relative flex size-28 items-center justify-center rounded-full border border-orange-500 bg-linear-to-br from-orange-500/20 to-yellow-500/20">
              <FontAwesomeIcon
                className="text-5xl text-orange-500"
                icon={faFaceFrown}
              />
              <div className="absolute top-0 -right-4 size-[19px] rotate-12 animate-bounce rounded-lg bg-orange-500"></div>
              <div className="absolute bottom-0 -left-4 size-4 animate-pulse rounded-full bg-yellow-500"></div>
            </div>
          </div>

          <section className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-white md:text-4xl">
              عفواً! الصفحة غير موجودة
            </h2>
            <p className="max-w-md text-lg leading-7 text-neutral-400">
              الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
              المسار الصحيح.
            </p>
          </section>

          <div className="my-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              onClick={() => {
                scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="centerByFlex baseTransition gap-2 rounded-full border border-orange-500 bg-[linear-gradient(135deg,#f97316,#ea580c)] px-8 py-4 text-base font-semibold text-white hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faHouse} /> الذهاب للرئيسية
            </Link>

            <Link
              to="/blog"
              onClick={() => {
                scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="centerByFlex baseTransition gap-2 rounded-full border border-neutral-800 px-8 py-4 text-base font-semibold text-white hover:border-orange-500 hover:text-orange-500"
            >
              <FontAwesomeIcon icon={faNewspaper} /> تصفح المقالات
            </Link>
          </div>

          <div className="w-120 space-y-4 border border-transparent border-t-neutral-800 pt-8 text-center">
            <p className="text-sm text-neutral-500">قد تجد هذه مفيدة:</p>
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-neutral-600">
              <Link
                onClick={() => {
                  scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="baseTransition text-orange-500 hover:text-orange-400 hover:underline"
                to="/blog"
              >
                المدونة
              </Link>
              •
              <Link
                onClick={() => {
                  scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="baseTransition text-orange-500 hover:text-orange-400 hover:underline"
                to="/whoAreWe"
              >
                من نحن
              </Link>
              •
              <Link
                onClick={() => {
                  scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="baseTransition text-orange-500 hover:text-orange-400 hover:underline"
                to=""
              >
                الخصوصية
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
