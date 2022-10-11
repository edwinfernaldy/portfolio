import { ReactNode } from "react";
import cn from "clsx";

interface JumbotronProps {
  children: ReactNode;
  className?: string;
}

export default function Jumbotron(props: JumbotronProps) {
  const { children, className } = props;
  return (
    <h1
      className={cn("text-4xl md:text-6xl lg:text-7xl xl:text-9xl", className)}
    >
      {children}
    </h1>
  );
}
