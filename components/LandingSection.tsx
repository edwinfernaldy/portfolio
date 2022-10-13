import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import DivingImage from "/public/assets/photos/IMG_2727.jpeg";
import Jumbotron from "./Jumbotron";
import DevBooks from "/public/assets/photos/webdevbook.jpeg";

export default function LandingSection() {
  return (
    <section className='flex flex-col lg:flex-row p-5 h-screen items-center'>
      <div className='flex flex-col gap-2 basis-1/2'>
        <div className='relative h-1/2'>
          <Image
            className='object-cover aspect-square saturate-0'
            src={DevBooks}
            width={600}
            height={400}
            alt='Background-image'
          />
        </div>

        <div className='h-1/2 relative'>
          <Image
            className='object-cover aspect-square saturate-0'
            src={DivingImage}
            width={600}
            height={400}
            alt='Background-image'
          />
        </div>
      </div>

      <div className=' basis-1/2 flex flex-col lg:min-h-screen justify-between py-5'>
        <Jumbotron className='self-start xl:text-9xl font-bold pb-2 border-b border-gray-500'>
          PORTFOLIO
        </Jumbotron>

        <div>
          <p>Edwin Fernaldy</p>

          <p>Website Developer</p>
        </div>

        <div>
          <p className='font-neue text-center'>Scroll down for more</p>
        </div>
      </div>
    </section>
  );
}
