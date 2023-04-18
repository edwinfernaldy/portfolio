import { motion } from "framer-motion";

export default function WelcomeOverlay() {
  return (
    <motion.div
      animate={{ y: -1000 }}
      transition={{ delay: 1.1 }}
      className='flex w-full fixed z-[99]'
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 0.6 }}
        className='bg-black w-full h-screen'
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 0.7 }}
        className='bg-black w-full h-screen'
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 0.8 }}
        className='bg-black w-full h-screen'
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 0.9 }}
        className='bg-black w-full h-screen'
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 1 }}
        className='bg-black w-full h-screen'
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 0.9 }}
        className='bg-black w-full h-screen'
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 0.8 }}
        className='bg-black w-full h-screen'
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 0.7 }}
        className='bg-black w-full h-screen'
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ delay: 0.6 }}
        className='bg-black w-full h-screen'
      />
    </motion.div>
  );
}
