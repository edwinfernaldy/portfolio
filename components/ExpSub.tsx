import { ReactNode } from "react";
import cn from "clsx";

interface ExpSubType {
  children: ReactNode;
  className?: string;
}

export default function ExpSub(props: ExpSubType) {
  return <div className={cn("w-1/4", props.className)}>{props.children}</div>;
}
