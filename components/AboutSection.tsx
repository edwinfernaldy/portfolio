import Image from "next/image";
import Jumbotron from "./Jumbotron";
import SingAlley from "/public/assets/photos/IMG_1459.jpg";
import Guitaring from "/public/assets/photos/IMG_3204.jpeg";
import { motion } from "framer-motion";

export default function aboutSection() {
  return (
    <section className='h-screen flex gap-1 p-5 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2.5 } }}
        className='relative w-full flex-grow h-full hidden lg:block'
      >
        <Image
          className='saturate-0 h-full'
          src={Guitaring}
          layout='fill'
          objectFit='cover'
          alt='close-up-me'
        />
      </motion.div>

      <div className='px-6 flex flex-col gap-6'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1.5 }
          }}
        >
          <Jumbotron className='mb-5 xl:text-7xl'>About Me</Jumbotron>
        </motion.div>

        <div className='flex flex-col md:flex-row gap-5'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.8 } }}
            className='w-3/4'
          >
            <h1 className='text-3xl'>Based on Tangerang, Indonesia.</h1>

            <p className='text-justify'>
              Im currently living in Tangerang, just finished my college
              majoring computer science program at Bina Nusantara University.
              Got my bachelors degree at 2022, so here i am looking for an
              opportunity to share my capabilites and of course to learn from
              others.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
            className='w-full'
          >
            <h1 className='text-3xl'>
              <q>Flexible and Adaptive</q>
            </h1>
            <p className='text-justify'>
              I have implemented several frameworks, methods, and technologies
              during my experience, the more knowledge I get the more I get
              inspiration in solving problems. In my opinion, knowledge is all
              that matters because world is growing relatively fast, if we dont
              update our mind and capabilites we may struggled more than people
              who work for it and learn from it, besides it doesn&lsquo;t hurt
              to learn..
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.9 } }}
        >
          <h1 className='text-3xl'>Thanks for the attention</h1>
          <p>
            For those who viewing this website i hope we&lsquo;ll get in touch
            and make something great together !!
          </p>
        </motion.div>

        <div className='flex items-start gap-1 h-full'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2.2 } }}
            className='relative w-full h-full'
          >
            <Image
              layout='fill'
              objectFit='cover'
              className='h-full saturate-0'
              src={SingAlley}
              alt='me'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
