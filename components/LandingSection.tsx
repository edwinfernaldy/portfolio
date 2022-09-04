import cn from "clsx";
import styles from "../styles/Home.module.css";

export default function LandingSection() {
  return (
    <section
      className={cn(
        "h-screen w-full p-6 flex items-center justify-center",
        styles.bgGradient
      )}
    >
      <h1 className="xl:text-9xl text-2xl text-cyan-800 font-extrabold">
        WEBSITE DEVELOPER
      </h1>

      <p>Edwin Fernaldy</p>
    </section>
  );
}
