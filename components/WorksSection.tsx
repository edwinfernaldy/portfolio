import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Netra Web3 Decentralized Music Assets",
    description: "A full-stack web3 application using React and NodeJS.",
    image: "/assets/photos/netraweb.png",
    tags: ["React", "Node.js", "TypeScript", "Solana", "GraphQL"]
  },
  {
    title: "Jagawaktu Attendance Management System",
    description:
      "Attendance Management System built with NextJS and TailwindCSS.",
    image: "/assets/photos/jagawaktu.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "PostgreSQL",
      "Drizzle ORM"
    ]
  },
  {
    title: "Eprocurement System",
    description: "Eprocurement System built with Laravel and VueJS.",
    image: "/assets/photos/kangean.png",
    tags: ["Laravel", "VueJS", "MySQL", "TailwindCSS", "Docker"]
  }
];

export default function WorksSection() {
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
      id='works'
      className='relative py-24 md:py-32 overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/2 -right-1/4 w-[40rem] h-[40rem] bg-swiss-purple-600/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/2 -left-1/4 w-[30rem] h-[30rem] bg-swiss-purple-400/10 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div style={{ opacity }} className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600'>
              Latest Projects
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600 mx-auto mb-8' />
            <p className='text-lg md:text-xl text-swiss-gray-400 max-w-2xl mx-auto'>
              A collection of projects that showcase my expertise in web
              development and design
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='group relative aspect-[4/3] overflow-hidden rounded-lg bg-swiss-gray-900/50 backdrop-blur-sm border border-swiss-gray-800'
              >
                <Image
                  src={project.image}
                  layout='fill'
                  objectFit='contain'
                  className='saturate-100 transition-all duration-500'
                  alt={project.title}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-swiss-gray-950 via-swiss-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-500' />
                <div className='absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <h3 className='text-2xl font-bold mb-2 text-white'>
                    {project.title}
                  </h3>
                  <p className='text-swiss-gray-300 mb-4'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-3 py-1 text-sm bg-swiss-purple-400/20 text-swiss-purple-400 rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className='text-center mt-16'
          >
            <a
              href='#contact'
              className='inline-block px-8 py-4 bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity'
            >
              View More Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
