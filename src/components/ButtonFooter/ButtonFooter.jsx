export default function ButtonFooter({ value, choose, func }) {
  return (
    <button
      onClick={() => {
        func(value);
      }}
      className={`buttonFooter centerByFlex size-11 ${choose === value ? "bg-linear-to-r from-orange-500 to-orange-600 text-white border-orange-500" : "text-neutral-500 hover:text-white"}`}
    >
      {value}
    </button>
  );
}
