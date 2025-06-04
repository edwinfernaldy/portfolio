import Image from "next/image";
import DivingImage from "/public/assets/photos/IMG_2727.jpeg";
import DevBooks from "/public/assets/photos/webdevbook.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LandingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Gradient Orbs */}
        <motion.div
          className='absolute top-1/4 -right-1/4 w-[50rem] h-[50rem] bg-swiss-purple-600/20 rounded-full blur-3xl'
          style={{ y }}
        />
        <motion.div
          className='absolute bottom-1/4 -left-1/4 w-[40rem] h-[40rem] bg-swiss-purple-400/10 rounded-full blur-3xl'
          style={{ y }}
        />

        {/* Animated Grid */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]' />

        {/* Floating Elements */}
        <div className='absolute inset-0'>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-swiss-purple-400/30 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className='relative z-10 text-center px-4'
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-7xl md:text-9xl font-bold tracking-tighter mb-6'
        >
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600'>
            EDWIN
          </span>
          <br />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-swiss-purple-600 to-swiss-purple-400'>
            FERNALDY
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-xl md:text-2xl text-swiss-gray-400 max-w-2xl mx-auto mb-12'
        >
          Full Stack Developer & Tech Lead
          <br />
          <span className='text-sm md:text-base text-swiss-gray-500'>
            Crafting digital experiences with modern technologies
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
