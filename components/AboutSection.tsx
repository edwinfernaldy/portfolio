import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id='about'
      className='relative py-24 md:py-32 overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/2 -left-1/4 w-[40rem] h-[40rem] bg-swiss-purple-600/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/2 -right-1/4 w-[30rem] h-[30rem] bg-swiss-purple-400/10 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div style={{ opacity }} className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              <div>
                <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600'>
                  About Me
                </h2>
                <div className='h-1 w-24 bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600 mb-8' />
              </div>

              <div className='space-y-6 text-swiss-gray-400'>
                <p className='text-lg md:text-xl leading-relaxed'>
                  I&apos;m a Full Stack Developer and Tech Lead with a passion
                  for creating innovative solutions and leading high-performing
                  teams. With over 8 years of experience in web development, I
                  specialize in building scalable applications and mentoring
                  developers.
                </p>
                <p className='text-lg md:text-xl leading-relaxed'>
                  My approach combines technical expertise with strategic
                  thinking, ensuring that every project not only meets but
                  exceeds expectations. I believe in clean code, efficient
                  solutions, and continuous learning.
                </p>
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-2 gap-4'>
                {[
                  "React & Next.js",
                  "Node.js & Express",
                  "TypeScript",
                  "GraphQL",
                  "AWS & Cloud",
                  "Team Leadership",
                  "System Design",
                  "Agile Methodologies"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='p-4 rounded-lg bg-swiss-gray-900/50 backdrop-blur-sm border border-swiss-gray-800'
                  >
                    <p className='text-swiss-gray-300'>{skill}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Images */}
            <motion.div
              style={{ y }}
              className='relative aspect-square lg:aspect-auto lg:h-[600px]'
            >
              <div className='absolute inset-0 grid grid-cols-2 gap-4'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className='relative overflow-hidden rounded-lg'
                >
                  <Image
                    src='/assets/photos/IMG_2727.jpeg'
                    layout='fill'
                    objectFit='cover'
                    className='saturate-0 hover:saturate-100 transition-all duration-500'
                    alt='Diving Image'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-swiss-gray-950/50 to-transparent' />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='relative overflow-hidden rounded-lg'
                >
                  <Image
                    src='/assets/photos/IMG_1459.jpg'
                    layout='fill'
                    objectFit='cover'
                    className='saturate-0 hover:saturate-100 transition-all duration-500'
                    alt='close up of me'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-swiss-gray-950/50 to-transparent' />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
