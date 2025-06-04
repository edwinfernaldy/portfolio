import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "WINUSA (PT. Winaldy Inter Nusa)",
    role: "Founder & CEO",
    timeline: "Sep 2023 - Present",
    product:
      "General supplier, IT solutions, internal tools and business systems",
    technologies: ["Next.js", "Node.js", "Laravel"],
    notes: [
      "Leading operations, client relationships, and digital product strategy",
      "Managing a team of developers and business analysts",
      "Overseeing multiple client projects and internal tools development",
      "Driving business growth and technical innovation"
    ]
  },
  {
    company: "Netra",
    role: "Full-Stack Developer",
    timeline: "Dec 2024 - Present",
    product: "Decentralized platform for fractional music ownership",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Drizzle ORM",
      "Xendit API",
      "MetaMask",
      "Wagmi",
      "GraphQL"
    ],
    notes: [
      "Built end-to-end Web3 app for music asset interaction and payments",
      "Implemented blockchain integration for music ownership",
      "Developed secure payment processing system",
      "Created responsive and intuitive user interface"
    ]
  },
  {
    company: "LMKN",
    role: "Full-Stack Developer",
    timeline: "Dec 2024 - Present",
    product: "Royalty distribution system at a national scale",
    technologies: ["Next.js", "Node.js", "REST APIs"],
    notes: [
      "Created scalable frontend/backend structure",
      "Handled core business logic for royalty calculations",
      "Implemented secure payment distribution system",
      "Built comprehensive admin dashboard"
    ]
  },
  {
    company: "Iotace (Kangean Energy Ltd)",
    role: "Front-End Developer",
    timeline: "Sep 2023 - Dec 2023",
    product: "Procurement web app for vendor/committee workflows",
    technologies: ["Next.js"],
    notes: [
      "Developed both sides of the procurement platform interface",
      "Implemented complex workflow management system",
      "Created responsive and accessible user interface",
      "Optimized application performance"
    ]
  },
  {
    company: "Gojet Airlines",
    role: "Front-End Developer",
    timeline: "May 2023 - Aug 2023",
    product: "Private jet booking platform",
    technologies: ["Vue.js"],
    notes: [
      "Built responsive user interface with optimized booking flow",
      "Implemented real-time availability checking",
      "Created seamless payment integration",
      "Developed admin dashboard for flight management"
    ]
  },
  {
    company: "PT. Adi Mitra Solusi",
    role: "Web Developer & Expeditor",
    timeline: "Apr 2021 - May 2023",
    product: "Company profile website and logistics support tools",
    technologies: ["Next.js", "Framer Motion", "Parallax Scrolling"],
    notes: [
      "Built company website with modern design and animations",
      "Supported shipping and inventory processes",
      "Developed internal tools for logistics management",
      "Created responsive and interactive user interfaces"
    ]
  },
  {
    company: "Netra",
    role: "Front-End Developer",
    timeline: "Mar 2022 - Nov 2022",
    product: "Blockchain music ownership and Web3 interaction",
    technologies: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "URQL",
      "Wagmi",
      "MetaMask"
    ],
    notes: [
      "Built Web3-based UI and integrated with blockchain wallets",
      "Implemented smart contract interactions",
      "Created responsive and intuitive user interface",
      "Optimized application performance"
    ]
  },
  {
    company: "PT. Astra Graphia Information Technology",
    role: "Front-End Engineer",
    timeline: "Mar 2021 - Mar 2022",
    product: "Enterprise internal/external web apps (3 versions)",
    technologies: ["React.js", "Redux", "GitLab", "Postman", "Figma"],
    notes: [
      "Collaborated with UI/UX and backend teams",
      "Delivered scalable frontend modules",
      "Implemented complex business logic",
      "Created responsive and accessible interfaces"
    ]
  },
  {
    company: "Kausa Indonesia",
    role: "Full-Stack Web Developer",
    timeline: "Jun 2020 - May 2021",
    product: "Custom e-commerce platform for fashion brand",
    technologies: ["Laravel", "GSAP", "PHP", "MySQL"],
    notes: [
      "Built entire storefront with dynamic animations",
      "Integrated checkout logic and payment processing",
      "Created admin dashboard for inventory management",
      "Implemented responsive design principles"
    ]
  },
  {
    company: "PT. Aviasi Jaya (AVTER)",
    role: "Front-End Developer Intern",
    timeline: "Mar 2020 - Jun 2020",
    product: "Cargo booking system",
    technologies: ["Laravel Blade", "PHP", "MySQL"],
    notes: [
      "Developed booking flows and backend-connected templates",
      "Created responsive user interface",
      "Implemented form validation and error handling",
      "Assisted in system testing and debugging"
    ]
  }
];

export default function ExperienceSection() {
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
      id='experience'
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
              Professional Journey
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600 mx-auto mb-8' />
            <p className='text-lg md:text-xl text-swiss-gray-400 max-w-2xl mx-auto'>
              A timeline of my professional experience and key achievements
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className='space-y-12'>
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className='relative'
              >
                {/* Timeline Connector */}
                {index < experiences.length - 1 && (
                  <div className='absolute left-8 top-24 bottom-0 w-px bg-gradient-to-b from-swiss-purple-400/50 to-transparent' />
                )}

                <div className='grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8'>
                  {/* Left Column - Timeline & Company */}
                  <div className='relative'>
                    <div className='sticky top-24 space-y-4'>
                      <div className='flex items-center space-x-4'>
                        <div className='w-4 h-4 rounded-full bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600' />
                        <span className='text-sm text-swiss-purple-400'>
                          {experience.timeline}
                        </span>
                      </div>
                      <h3 className='text-2xl font-bold text-white'>
                        {experience.company}
                      </h3>
                      <p className='text-lg text-swiss-gray-400'>
                        {experience.role}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className='space-y-6'>
                    <div className='p-6 rounded-lg bg-swiss-gray-900/50 backdrop-blur-sm border border-swiss-gray-800'>
                      <h4 className='text-xl font-bold text-white mb-4'>
                        {experience.product}
                      </h4>
                      <div className='flex flex-wrap gap-2 mb-6'>
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='px-3 py-1 text-sm bg-swiss-purple-400/20 text-swiss-purple-400 rounded-full'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className='space-y-3'>
                        {experience.notes.map((note, noteIndex) => (
                          <motion.li
                            key={noteIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: noteIndex * 0.1
                            }}
                            viewport={{ once: true }}
                            className='flex items-start space-x-3 text-swiss-gray-400'
                          >
                            <span className='text-swiss-purple-400 mt-1'>
                              •
                            </span>
                            <span>{note}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
