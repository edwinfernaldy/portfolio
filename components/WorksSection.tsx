import Netra from "./icons/Netra";
import Image from "next/image";
import Agit from "/public/logo_agit.png";
import Avter from "/public/logo_avter.png";
import Kausa from "/public/logo_kausa.png";
import ExpCard from "./ExpCard";

export default function WorksSection() {
  return (
    <section className='pt-6 space-y-2'>
      <div className='relative h-12'>
        <div className='absolute w-fit mx-6 bg-[#edeced] z-10'>
          <h1 className='text-5xl'>My Previous Works</h1>
        </div>

        <span className='absolute top-5 inset-x-0 border border-black w-full'></span>
      </div>

      <ExpCard color='black'>
        <Netra className='m-auto h-full' />
      </ExpCard>

      <ExpCard>
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
      </ExpCard>

      <ExpCard>
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
