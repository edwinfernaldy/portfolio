import Image from "next/image";
import DivingImage from "/public/assets/photos/IMG_2727.jpeg";
import Jumbotron from "./Jumbotron";
import DevBooks from "/public/assets/photos/webdevbook.jpeg";
import { useParallax } from "react-scroll-parallax";

export default function LandingSection() {
  const op = useParallax<HTMLDivElement>({ opacity: [10, 0] });

  const scale = useParallax<HTMLDivElement>({ translateY: [80, -10] });

  return (
    <section className='flex flex-col lg:flex-row p-5 gap-2 h-screen overflow-hidden items-center'>
      <div
        ref={op.ref}
        className='flex flex-col gap-2 flex-grow w-full h-full order-2 lg:order-1'
      >
        <div className='relative h-1/2 overflow-hidden hidden lg:block'>
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

      <div
        ref={scale.ref}
        className='flex flex-col h-full justify-center order-1 lg:order-2'
      >
        <Jumbotron className='self-start xl:text-9xl font-bold pb-2 border-b border-gray-500'>
          PORTFOLIO
        </Jumbotron>

        <div className='text-right'>
          <p className='text-4xl'>Edwin Fernaldy</p>

          <p>Website Developer</p>
        </div>
      </div>
    </section>
  );
}
