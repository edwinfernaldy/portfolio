import Netra from "./icons/Netra";
import Image from "next/image";
import { motion } from "framer-motion";
import Agit from "/public/logo_agit.png";
import Avter from "/public/logo_avter.png";
import Kausa from "/public/logo_kausa.png";
import ExpCard from "./ExpCard";
import ExpSub from "./ExpSub";

export default function WorksSection() {
  return (
    <section className='pt-6 gap-2 flex flex-col'>
      <div className='relative h-12'>
        <motion.div
          initial={{ x: 1000 }}
          whileInView={{ x: 0, transition: { duration: 1.9 } }}
          exit={{ x: 0 }}
          className='absolute w-fit mx-6 bg-[#edeced] z-10'
        >
          <h1 className='text-5xl'>My Previous Works</h1>
        </motion.div>

        <span className='absolute top-5 inset-x-0 border border-black w-full'></span>
      </div>

      <ExpCard color='black'>
        <Netra className='m-auto h-full' />

        <ExpSub className='text-white'>
          Develop Web3 Application for musician to share their royalty from
          published songs. Focusing on Front-end, gathered data from blockchain{" "}
          <i>(Ethereum Network)</i>.
        </ExpSub>
      </ExpCard>

      <ExpCard>
        <ExpSub>
          Develop 3 WebApp about data integration, cleansing, processing.
          Contribute in several version webApp that serve different purpose of
          data. Focusing on front-end, data visualization.
        </ExpSub>

        <div className='relative h-full w-1/4'>
          <Image
            src={Agit}
            alt='logo_agit'
            layout='fill'
            objectFit='contain'
            className='invert'
          />
        </div>
      </ExpCard>

      <ExpCard color='black'>
        <div className='relative h-full w-1/4'>
          <Image
            src={Kausa}
            alt='logo_kausa'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <ExpSub className='text-white'>
          Developed online shop WebApp, besides shopping the website has several
          function like company profile, Blogs, Home, events.
        </ExpSub>
      </ExpCard>

      <ExpCard>
        <ExpSub>
          Develop cargo online booking WebApp, Focusing on Front-end, utilizing
          lots of bootstrap and php.
        </ExpSub>

        <div className='relative h-full w-1/4'>
          <Image
            src={Avter}
            alt='logo_avter'
            layout='fill'
            objectFit='contain'
            className='invert'
          />
        </div>
      </ExpCard>
    </section>
  );
}
