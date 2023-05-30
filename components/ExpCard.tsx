import { ReactNode } from "react";
import cn from "clsx";

interface ExpCardType {
  children: ReactNode;
  color?: string;
}

export default function ExpCard(props: ExpCardType) {
  return (
    <div
      className={cn(
        props.color === "black" && "bg-black",
        "w-full p-6 h-[25vh] flex justify-center"
      )}
    >
      {props.children}
    </div>
  );
}
