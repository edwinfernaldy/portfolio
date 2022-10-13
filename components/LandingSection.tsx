import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import DivingImage from "/public/assets/photos/IMG_2727.jpeg";
import Jumbotron from "./Jumbotron";
import DevBooks from "/public/assets/photos/webdevbook.jpeg";

export default function LandingSection() {
  return (
    <section className='flex flex-col lg:flex-row p-5 gap-2 h-screen overflow-hidden items-center'>
      <div className='flex flex-col gap-2 flex-grow w-full h-full'>
        <div className='relative h-1/2 overflow-hidden'>
          <Image
            className='object-cover saturate-0 h-full'
            src={DevBooks}
            layout='responsive'
            alt='Background-image'
          />
        </div>

        <div className='relative h-1/2 overflow-hidden'>
          <Image
            className='object-cover saturate-0 h-full'
            src={DivingImage}
            layout='responsive'
            alt='Background-image'
          />
        </div>
      </div>

      <div className='flex flex-col lg:min-h-screen justify-between'>
        <Jumbotron className='self-start xl:text-9xl font-bold pb-2 border-b border-gray-500'>
          PORTFOLIO
        </Jumbotron>

        <div>
          <p className='text-4xl'>Edwin Fernaldy</p>

          <p>Website Developer</p>
        </div>

        <div>
          <p className='font-neue text-center'>Scroll down for more</p>
        </div>
      </div>
    </section>
  );
}
