import Netra from "./icons/Netra";
import Image from "next/image";
import { motion } from "framer-motion";
import Agit from "/public/logo_agit.png";
import Avter from "/public/logo_avter.png";
import Kausa from "/public/logo_kausa.png";
import ExpCard from "./ExpCard";
import ExpSub from "./ExpSub";
import Dialog from "./Dialog";

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
        <Dialog
          title={"Netra"}
          subtitle={
            <ExpSub>
              Develop Web3 Application for musician to share their royalty from
              published songs. Focusing on Front-end, gathered data from
              blockchain <i>(Ethereum Network)</i>.
            </ExpSub>
          }
          button={<Netra className='m-auto h-full' />}
        />
      </ExpCard>

      <ExpCard>
        <Dialog
          title={"PT. AstraGraphia Tbk (Agit)"}
          subtitle={
            <ExpSub>
              Develop 3 WebApp about data integration, cleansing, processing.
              Contribute in several version webApp that serve different purpose
              of data. Focusing on front-end, data visualization.
            </ExpSub>
          }
          button={
            <Image
              src={Agit}
              alt='logo_agit'
              width={300}
              height={150}
              className='invert'
            />
          }
        />
      </ExpCard>

      <ExpCard color='black'>
        <Dialog
          title={"KAUSA INDONESIA"}
          subtitle={
            <ExpSub>
              Developed online shop WebApp, besides shopping the website has
              several function like company profile, Blogs, Home, events.
            </ExpSub>
          }
          button={
            <Image src={Kausa} alt='logo_kausa' width={200} height={200} />
          }
        />
      </ExpCard>

      <ExpCard>
        <Dialog
          title={"AVTER"}
          subtitle={
            <ExpSub>
              Develop cargo online booking WebApp, Focusing on Front-end,
              utilizing lots of bootstrap and php.
            </ExpSub>
          }
          button={
            <Image
              src={Avter}
              alt='logo_avter'
              width={300}
              height={100}
              className='invert'
            />
          }
        />
      </ExpCard>
    </section>
  );
}
