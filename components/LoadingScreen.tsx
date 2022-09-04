import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{
        width: "full",
        opacity: 1,
        scale: 1,
        height: "screen",
        background: "black",
        borderRadius: 0,
      }}
      animate={{
        scale: 0,
        borderRadius: 100,
        x: 0,
      }}
      transition={{ delay: 2, x: { duration: 5 }, default: { ease: "linear" } }}
      className="fixed inset-0 z-30 p-6 flex"
    >
      <h1 className="text-opacity-50 text-center text-7xl self-end">
        Loading . .
      </h1>
    </motion.div>
  );
}
