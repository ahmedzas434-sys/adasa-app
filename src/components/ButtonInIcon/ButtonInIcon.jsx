import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonInIcon({ icon, func, choose, id }) {
  return (
    <button
      onClick={() => {
        func(id);
      }}
      className={`centerByFlex size-9 cursor-pointer rounded-lg p-2 transition-all ${choose === id ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
    >
      <FontAwesomeIcon icon={icon} className="text-xl" />
    </button>
  );
}
