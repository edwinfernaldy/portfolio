import cn from "clsx";
import styles from "../styles/Home.module.css";

export default function LandingSection() {
  return (
    <section className={cn("h-screen p-6")}>
      <h1 className="xl:text-3xl text-2xl text-white">
        Some Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Pariatur excepturi non minima, cupiditate ipsum numquam nulla fuga
        corrupti asperiores nostrum quis quas illo doloribus, quisquam
        blanditiis ratione amet repellat sed.
      </h1>
    </section>
  );
}
