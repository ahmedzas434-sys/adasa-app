import {
  faGithub,
  faSquareLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import SocialCard from "../SocialCard/SocialCard";
import CardFooter from "../CardFooter/CardFooter";
import HeadFooter from "../HeadFooter/HeadFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="relative bg-neutral-950 overflow-hidden">
        <div className="absolute blur-3xl top-0 left-1/4 size-96 bg-orange-500/5 rounded-full"></div>
        <div className="absolute blur-3xl bottom-0 right-1/4 size-96 bg-yellow-500/5 rounded-full"></div>


        <div className="border-3 relative border-transparent border-y-neutral-900 px-3 py-16 md:px-4 xl:px-[10%]">
          <div className="xl:container xl:mx-auto">
            <div className="grid gap-4 max-lg:grid-cols-2 max-lg:gap-6 max-md:grid-cols-1 lg:grid-cols-4">
              <div className="space-y-6">
                <div className="group flex items-center gap-3">
                  <div className="baseTransition centerByFlex size-12 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 text-[22px] font-bold text-white group-hover:scale-105">
                    <span>ع</span>
                  </div>
                  <h5 className="text-xl font-bold text-white">عدسة</h5>
                </div>
                <p className="text-sm leading-relaxed text-neutral-500">
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                  المحترفين ونصائح عملية لتطوير مهاراتكم.
                </p>
                <div className="flex items-center gap-2">
                  <SocialCard key={1} color="" to="https://twitter.com/adasah" brand={faXTwitter} />
                  <SocialCard key={2} color="" to="https://github.com/adasah" brand={faGithub} />
                  <SocialCard key={3} color="" to="https://linkedin.com/company/adasah" brand={faSquareLinkedin} />
                  <SocialCard key={4} color="" to="https://youtube.com/@adasah+" brand={faYoutube} />
                </div>
              </div>

              <CardFooter
              key={1}
                nameHead={"استكشف"}
                nameLink={["الرئيسية", "المدونة", "من نحن"]}
              />

              <CardFooter
              key={2}
                nameHead={"التصنيفات"}
                nameLink={["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"]}
              />

              <div>
                <HeadFooter nameHead={"ابقى على اطلاع"} />
                <p className="mt-6 text-sm text-neutral-500">
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <input
                  type="text"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="baseTransition mt-6 mb-2 w-full rounded-2xl border-2 border-neutral-800 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-neutral-500 focus:border-orange-500"
                />
                <button className="w-full cursor-pointer rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-white">
                  أشترك
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 relative md:px-4 xl:px-[10%]">
          <div className="flex items-center justify-between gap-4 py-6 text-sm text-neutral-600 max-md:flex-col xl:container xl:mx-auto">
            <p>
              © 2026 عدسة. صنع بكل{" "}
              <FontAwesomeIcon className="text-orange-500" icon={faHeart} />{" "}
              جميع الحقوق محفوظة.
            </p>

            <div className="space-x-3">
              <span className="baseTransition cursor-pointer hover:text-orange-500">
                سياسة الخصوصية
              </span>
              <span className="baseTransition cursor-pointer hover:text-orange-500">
                شروط الخدمة
              </span>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
