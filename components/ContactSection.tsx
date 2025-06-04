import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:edwinfernaldy@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${subject}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      ref={containerRef}
      id='contact'
      className='relative py-24 md:py-32 overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/2 -left-1/4 w-[40rem] h-[40rem] bg-swiss-purple-600/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/2 -right-1/4 w-[30rem] h-[30rem] bg-swiss-purple-400/10 rounded-full blur-3xl' />
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
              Get in Touch
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600 mx-auto mb-8' />
            <p className='text-lg md:text-xl text-swiss-gray-400 max-w-2xl mx-auto'>
              Let&apos;s discuss how we can work together to bring your ideas to
              life
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='max-w-2xl mx-auto'
          >
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-swiss-gray-400 mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-swiss-gray-900/50 backdrop-blur-sm border border-swiss-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-swiss-purple-400'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-swiss-gray-400 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-swiss-gray-900/50 backdrop-blur-sm border border-swiss-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-swiss-purple-400'
                    placeholder='Your email'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-swiss-gray-400 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-swiss-gray-900/50 backdrop-blur-sm border border-swiss-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-swiss-purple-400'
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-swiss-gray-400 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 bg-swiss-gray-900/50 backdrop-blur-sm border border-swiss-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-swiss-purple-400'
                  placeholder='Your message'
                />
              </div>
              <div className='text-center'>
                <motion.button
                  onClick={handleSubmit}
                  type='button'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-swiss-purple-400 to-swiss-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity'
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-center mt-16'
          >
            <div className='flex justify-center space-x-6'>
              <motion.a
                href='https://github.com/edwinfernaldy'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                className='text-swiss-gray-400 hover:text-swiss-purple-400 transition-colors'
              >
                GitHub
              </motion.a>
              <motion.a
                href='https://linkedin.com/in/edwin-fernaldy'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                className='text-swiss-gray-400 hover:text-swiss-purple-400 transition-colors'
              >
                LinkedIn
              </motion.a>
              <motion.a
                href='https://wa.me/6282311016325'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                className='text-swiss-gray-400 hover:text-swiss-purple-400 transition-colors'
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
