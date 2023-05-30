import { ReactNode } from "react";
import cn from "clsx";

interface ExpSubType {
  children: ReactNode;
  className?: string;
}

export default function ExpSub(props: ExpSubType) {
  return (
    <div className={cn("relative self-center h-fit", props.className)}>
      <p>{props.children}</p>
    </div>
  );
}
