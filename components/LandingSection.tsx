import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import DivingImage from "/public/assets/photos/IMG_2727.jpeg";
import Tilt from "react-parallax-tilt";

export default function LandingSection() {
  return (
    <section className='flex h-screen items-center'>
      <Parallax easing={"easeInOutCirc"} className='peer z-20' speed={20}>
        <Tilt>
          <h1 className='lg:text-7xl text-3xl'>
            Hi,
            <br />
            I&#39;m <span className='text-blue-400'>E</span>dwin{" "}
            <span className='text-pink-300'>F</span>
            ernaldy,
            <br />
            web developer
          </h1>
        </Tilt>
      </Parallax>

      <Tilt
        tiltReverse
        transitionSpeed={800}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.2}
        className='absolute inset-0 duration-300 transition peer-hover:blur-lg'
      >
        <Image
          className='object-cover brightness-50'
          src={DivingImage}
          layout='fill'
          alt='Background-image'
        />
      </Tilt>
    </section>
  );
}
