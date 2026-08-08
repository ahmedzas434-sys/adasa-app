import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBolt,
  faBookOpen,
  faUserGroup,
  faNewspaper,
  faPenNib,
  faBullseye,
  faHandshake,
  faArrowsRotate,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import image01 from "../../assets/images/image01.webp";
import image02 from "../../assets/images/image02.webp";
import image03 from "../../assets/images/image03.webp";
import image04 from "../../assets/images/image04.webp";
import image05 from "../../assets/images/image05.webp";
import image06 from "../../assets/images/image06.webp";
import image07 from "../../assets/images/image07.webp";
import image08 from "../../assets/images/image08.webp";
import image09 from "../../assets/images/image09.webp";
import image10 from "../../assets/images/image10.webp";
import image12 from "../../assets/images/image12.webp";
import image13 from "../../assets/images/image13.webp";
import image14 from "../../assets/images/image14.webp";
import image15 from "../../assets/images/image15.webp";
import image16 from "../../assets/images/image16.webp";
import image17 from "../../assets/images/image17.webp";
import image18 from "../../assets/images/image18.webp";
import image19 from "../../assets/images/image19.webp";
import image20 from "../../assets/images/image20.webp";
import image21 from "../../assets/images/image21.webp";
import image22 from "../../assets/images/image22.webp";
import image23 from "../../assets/images/image23.webp";
import image24 from "../../assets/images/image24.webp";
import image25 from "../../assets/images/image25.webp";
import image26 from "../../assets/images/image26.webp";
import image27 from "../../assets/images/image27.webp";
import image28 from "../../assets/images/image28.webp";
import image29 from "../../assets/images/image29.webp";
import Article from "../../components/Article/Article";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function WhoAreWe() {
  const values = [
    {
      icon: faBullseye,
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: faBolt,
      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
    {
      icon: faHandshake,
      title: "المجتمع",
      description: "تعلم مع آلاف المصورين",
    },
    {
      icon: faArrowsRotate,
      title: "دائماً محدث",
      description: "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];

  const team = [
  {
    name: "عمر خالد",
    role: "مصور طبيعة",
    avatar: image01,
  },
  {
    name: "سيف محمد",
    role: "مصور بورتريه",
    avatar: image02,
  },
  {
    name: "كريم أحمد",
    role: "مصور محترف",
    avatar: image03,
  },
  {
    name: "رامي حسن",
    role: "مصور رحلات",
    avatar: image04,
  },
  {
    name: "طارق محمود",
    role: "مصور استوديو",
    avatar: image05,
  },
  {
    name: "يوسف علي",
    role: "مصور شوارع",
    avatar: image06,
  },
  {
    name: "مروان عبدالله",
    role: "مصور أعراس",
    avatar: image07,
  },
  {
    name: "زياد سامي",
    role: "مصور مواليد",
    avatar: image08,
  },
  {
    name: "أنس وليد",
    role: "فنان بصري",
    avatar: image09,
  },
  {
    name: "حسام ناصر",
    role: "مصور طبيعة",
    avatar: image10,
  },
  {
    name: "فهد خالد",
    role: "مصور بورتريه",
    avatar: image12,
  },
  {
    name: "باسم عمر",
    role: "مصور محترف",
    avatar: image13,
  },
  {
    name: "رامز سعيد",
    role: "مصور رحلات",
    avatar: image14,
  },
  {
    name: "وليد مازن",
    role: "مصور استوديو",
    avatar: image15,
  },
  {
    name: "عادل ياسر",
    role: "مصور شوارع",
    avatar: image16,
  },
  {
    name: "معاذ إبراهيم",
    role: "مصور أعراس",
    avatar: image17,
  },
  {
    name: "رائد فهد",
    role: "مصور مواليد",
    avatar: image18,
  },
  {
    name: "نبيل سامر",
    role: "فنان بصري",
    avatar: image19,
  },
  {
    name: "أيمن حمد",
    role: "مصور طبيعة",
    avatar: image20,
  },
  {
    name: "خالد يحيى",
    role: "مصور بورتريه",
    avatar: image21,
  },
  {
    name: "حازم علي",
    role: "مصور محترف",
    avatar: image22,
  },
  {
    name: "معتز حسن",
    role: "مصور رحلات",
    avatar: image23,
  },
  {
    name: "شادي محمود",
    role: "مصور استوديو",
    avatar: image24,
  },
  {
    name: "إياد محمد",
    role: "مصور شوارع",
    avatar: image25,
  },
  {
    name: "بدر أحمد",
    role: "مصور أعراس",
    avatar: image26,
  },
  {
    name: "سامح عبدالله",
    role: "مصور مواليد",
    avatar: image27,
  },
  {
    name: "لؤي خالد",
    role: "فنان بصري",
    avatar: image28,
  },
  {
    name: "عصام نادر",
    role: "مصور مواليد",
    avatar: image29,
  },
];

  return (
    <div className="bg-[#111111] text-white">
      <div className="centerByFlex relative min-h-[95vh] px-3 pt-10 md:px-4 xl:px-[10%]">
        <div className="xl:container xl:mx-auto">
          <div className="absolute inset-0 bg-[rgb(10,10,10)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
          <div className="absolute inset-0">
            <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"></div>
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>
          </div>

          <Article
            isIcon={false}
            hText={"مهمتنا هي"}
            pText={
              "مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة."
            }
            spanText={"الإعلام والإلهام"}
            textOne="من نحن"
          />

          <div className="relative mx-auto mt-14 grid max-w-225 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: faUserGroup, value: "+2مليون", label: "قارئ شهرياً" },
              { icon: faNewspaper, value: "+500", label: "مقالة متشـرورة" },
              { icon: faPenNib, value: "+50", label: "كاتب خبـر" },
              { icon: faBookOpen, value: "+15", label: "تخصص" },
            ].map((stat, index) => (
              <div
                key={index}
                className="h-[141.6px] space-y-2 rounded-3xl border border-neutral-800 bg-[#161616cc] p-6 text-center"
              >
                <div className="centerByFlex">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-2xl text-orange-500"
                  />
                </div>

                <div className="bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-3xl font-black text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="relative border-y border-neutral-900 bg-[#111111] px-3 py-20 md:px-4 xl:px-[10%]">
        <div className="space-y-16 xl:container xl:mx-auto">
          <div className="space-y-4 text-center">
            <h3 className="after:translate-y-[-50%]] before:translate-y-[-50%]] relative mx-auto w-fit text-4xl font-bold text-white before:absolute before:top-[10%] before:-right-5 before:h-[80%] before:w-1.5 before:rounded-full before:bg-linear-to-b before:from-orange-500 before:to-yellow-500 after:absolute after:top-[10%] after:-left-5 after:h-[80%] after:w-1.5 after:rounded-full after:bg-linear-to-t after:from-orange-500 after:to-yellow-500">
              قيمنا
            </h3>

            <p className="mx-auto max-w-xl text-lg text-neutral-400">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="baseTranstion group /30 space-y-3 rounded-3xl border border-neutral-800 bg-neutral-900 p-6 text-center hover:bg-linear-to-br hover:from-orange-500/10 hover:to-yellow-500/10"
              >
                <div className="centerByFlex text-orange-500">
                  <FontAwesomeIcon icon={icon} className="text-4xl leading-9" />
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-orange-500">
                  {title}
                </h3>

                <p className="text-sm text-neutral-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-950 px-3 py-20 md:px-4 xl:px-[10%]">
        <div className="xl:container xl:mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-5 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/80 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500">
                <span className="size-1.5 animate-pulse rounded-full bg-orange-500" />{" "}
                فريقنا
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white">تعرف على كتابنا</h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-neutral-400">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((person, index) => (
              <div
                key={index}
                className="rounded-3xl border border-neutral-800 bg-[#161616] p-6 text-center baseTransition group hover:border-orange-500/30"
              >
                <div className="relative mx-auto size-25 group-hover:border-orange-500/30 rounded-full border-4 baseTransition border-neutral-800">
                  <img
                  loading="lazy"
                    src={person.avatar}
                    alt={person.name}
                    className="size-full rounded-full object-cover object-center"
                  />
                  <span className="centerByFlex absolute -right-1 bottom-0 flex size-6 rounded-full bg-orange-500 text-xs text-white">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </div>
                <div className="mb-4 mt-5">
                  <h3 className="text-lg font-bold text-white">{person.name}</h3>
                <p className="text-sm font-medium text-orange-500">
                  {person.role}
                </p>
                </div>
                <div className="centerByFlex gap-3">
                  <a
                    href="#"
                    className="centerByFlex size-9 text-base rounded-lg bg-neutral-800 text-neutral-500 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a
                    href="#"
                    className="centerByFlex size-9 text-base rounded-lg bg-neutral-800 text-neutral-500 transition-colors hover:bg-neutral-700 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="#"
                    className="centerByFlex size-9 text-base rounded-lg bg-neutral-800 text-neutral-500 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 px-3 py-20 md:px-4 xl:px-[10%]">
        <div className="xl:container xl:mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-white/80">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>

            <div className="centerByFlex flex-wrap gap-4">
               <Link
               onClick={()=>{
                scrollTo({
                  top:0,
                  behavior:"smooth"
                })
               }}
                to="/"
                className="max-sm:w-full rounded-xl centerByFlex border-black gap-2 bg-black px-8 py-4 text-base font-semibold border text-white baseTransition hover:-translate-y-0.5 hover:opacity-90"
              >
              <FontAwesomeIcon icon={faEnvelope} />    تواصل معنا 
               
              </Link>
              <Link
                to="/blog"
                onClick={()=>{
                scrollTo({
                  top:0,
                  behavior:"smooth"
                })
               }}
                className="max-sm:w-full rounded-xl border border-white/40 py-4 px-8 text-base font-semibold text-white baseTransition  hover:bg-white hover:text-black"
              >
                تصفح المقالات
              </Link>
             
            </div>
        </div>
      </section>
    </div>
  );
}
