import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonSlid({ value,func,page ,dir,max}) {
  return (
    <button onClick={()=>{
      func(page,dir);
      console.log(max);
    }} className={`buttonFooter centerByFlex size-[45.6px] ${(page === max && dir === "left") || (page === 1 && dir === "right")? "cursor-not-allowed text-neutral-600 bg-neutral-950 hover:border-neutral-800":"text-white"}`}>
      <FontAwesomeIcon icon={value} />
    </button>
  );
}
