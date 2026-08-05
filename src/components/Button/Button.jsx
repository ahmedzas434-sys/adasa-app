export default function Button({ buttonName, activeButton, id, func }) {
  let isActive = activeButton === id;

  return (
    <button
      onClick={() => func(id, buttonName)}
      className={`cursor-pointer rounded-xl border border-transparent px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-orange-500/30"}`}
    >
      {buttonName}
    </button>
  );
}
