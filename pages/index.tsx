import type { NextPage } from "next";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import LandingSection from "../components/LandingSection";
import WorksSection from "../components/WorksSection";
import ExperienceSection from "../components/ExperienceSection";

const Home: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Close mobile menu first
      setIsMenuOpen(false);

      // Add a small delay to ensure the menu is closed before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  return (
    <>
      <Head>
        <title>Edwin Fernaldy | Full Stack Developer & Tech Lead</title>
        <meta
          name='description'
          content='Full Stack Developer and Tech Lead with expertise in modern web technologies. Specializing in scalable applications, team leadership, and innovative solutions.'
        />
        <meta
          name='keywords'
          content='Full Stack Developer, Tech Lead, React, Node.js, TypeScript, JavaScript, Web Development, Team Leadership, Edwin Fernaldy'
        />
        <meta name='author' content='Edwin Fernaldy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main
        ref={containerRef}
        className='relative min-h-screen bg-swiss-gray-950 text-white overflow-hidden'
      >
        {/* Dynamic Background */}
        <motion.div
          className='fixed inset-0 pointer-events-none'
          style={{ y: backgroundY }}
        >
          {/* Gradient Orbs */}
          <div className='absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-swiss-purple-600/20 rounded-full blur-3xl' />
          <div className='absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-swiss-purple-400/10 rounded-full blur-3xl' />

          {/* Animated Grid */}
          <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]' />

          {/* Floating Elements */}
          <div className='absolute inset-0'>
            {[...Array(20)].map((_, i) => (
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
        </motion.div>

        {/* Navigation */}
        <nav className='fixed top-0 left-0 w-full z-50 bg-swiss-gray-950/80 backdrop-blur-sm border-b border-swiss-gray-800'>
          <div className='container mx-auto px-4 md:px-8 lg:px-12'>
            <div className='flex items-center justify-between h-16 md:h-20'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='text-xl font-bold tracking-tighter'
              >
                EF
              </motion.div>
              <div className='hidden md:flex items-center space-x-8'>
                {["about", "experience", "works", "contact"].map((item) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleScrollToSection(item)}
                    className='text-sm uppercase tracking-wider hover:text-swiss-purple-400 transition-colors'
                  >
                    {item}
                  </motion.button>
                ))}
                <div className='h-4 w-px bg-swiss-gray-800 mx-4' />
                <div className='flex items-center space-x-4'>
                  <motion.a
                    href='https://github.com/edwinfernaldy'
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05, color: "#8B5CF6" }}
                    className='text-sm hover:text-swiss-purple-400 transition-colors'
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href='https://linkedin.com/in/edwin-fernaldy'
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05, color: "#8B5CF6" }}
                    className='text-sm hover:text-swiss-purple-400 transition-colors'
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href='https://wa.me/6282311016325'
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05, color: "#8B5CF6" }}
                    className='text-sm hover:text-swiss-purple-400 transition-colors'
                  >
                    WhatsApp
                  </motion.a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden p-2'
              >
                <div className='w-6 h-5 relative flex flex-col justify-between'>
                  <motion.span
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      y: isMenuOpen ? 8 : 0
                    }}
                    className='w-full h-0.5 bg-white block'
                  />
                  <motion.span
                    animate={{
                      opacity: isMenuOpen ? 0 : 1
                    }}
                    className='w-full h-0.5 bg-white block'
                  />
                  <motion.span
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      y: isMenuOpen ? -8 : 0
                    }}
                    className='w-full h-0.5 bg-white block'
                  />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? "auto" : 0
            }}
            transition={{ duration: 0.3 }}
            className='md:hidden overflow-hidden bg-swiss-gray-950/95 backdrop-blur-sm'
          >
            <div className='container mx-auto px-4 py-4'>
              <div className='flex flex-col space-y-4'>
                {["about", "experience", "works", "contact"].map((item) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleScrollToSection(item)}
                    className='text-sm uppercase tracking-wider hover:text-swiss-purple-400 transition-colors text-left py-2'
                  >
                    {item}
                  </motion.button>
                ))}
                <div className='h-px bg-swiss-gray-800 my-2' />
                <div className='flex flex-col space-y-4'>
                  <motion.a
                    href='https://github.com/edwinfernaldy'
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className='text-sm hover:text-swiss-purple-400 transition-colors'
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href='https://linkedin.com/in/edwin-fernaldy'
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className='text-sm hover:text-swiss-purple-400 transition-colors'
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href='https://wa.me/6282311016325'
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className='text-sm hover:text-swiss-purple-400 transition-colors'
                  >
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </nav>

        {/* Scroll Progress */}
        <motion.div
          className='fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600 origin-left z-50'
          style={{ scaleX: scrollYProgress }}
        />

        {/* Content Sections */}
        <div className='relative z-10'>
          <LandingSection />
          <AboutSection />
          <ExperienceSection />
          <WorksSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
};

export default Home;
