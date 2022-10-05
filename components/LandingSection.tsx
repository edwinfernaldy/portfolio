import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import DivingImage from "/public/assets/photos/IMG_2727.jpeg";

export default function LandingSection() {
  return (
    <section className='flex h-screen items-center'>
      <Parallax
        easing={"easeInOutCirc"}
        className='flex-grow peer z-20'
        speed={20}
      >
        <h1 className='lg:text-7xl text-3xl'>
          Hi,
          <br />
          I&#39;m <span>E</span>dwin <span>F</span>ernaldy,
          <br />
          web developer
        </h1>
      </Parallax>

      <div className='absolute inset-0 duration-300 transition peer-hover:blur-lg'>
        <Image
          className='object-cover brightness-50'
          src={DivingImage}
          layout='fill'
          alt='Background-image'
        />
      </div>
    </section>
  );
}
