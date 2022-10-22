import Netra from "./icons/Netra";
import Image from "next/image";
import Agit from "/public/logo_agit.png";
import Avter from "/public/logo_avter.png";
import Kausa from "/public/logo_kausa.png";

export default function WorksSection() {
  return (
    <section className='pt-6 space-y-2'>
      <div className='relative h-12'>
        <div className='absolute w-fit mx-6 bg-[#edeced] z-10'>
          <h1 className='text-5xl'>My Previous Works</h1>
        </div>

        <span className='absolute top-5 inset-x-0 border border-black w-full'></span>
      </div>

      <div className='bg-black p-6 h-[25vh] w-full'>
        <Netra className='m-auto h-full' />
      </div>

      <div className='p-6 h-[25vh] w-full'>
        <div className='relative h-full'>
          <Image
            src={Agit}
            alt='logo_agit'
            layout='fill'
            objectFit='contain'
            className='invert'
          />
        </div>
      </div>

      <div className='bg-black w-full p-6 h-[25vh]'>
        <div className='relative h-full'>
          <Image
            src={Kausa}
            alt='logo_kausa'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>

      <div className='p-6 w-full h-[25vh]'>
        <div className='relative h-full'>
          <Image
            src={Avter}
            alt='logo_avter'
            layout='fill'
            objectFit='contain'
            className='invert'
          />
        </div>
      </div>
    </section>
  );
}
