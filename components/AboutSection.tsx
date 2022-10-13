import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import MeetPhoto from "/public/assets/photos/IMG_2892.jpeg";

export default function aboutSection() {
  return (
    <section className='h-screen flex gap-1 p-5'>
      <div className='w-full flex-grow'>
        <Image
          className='object-cover saturate-0'
          src={MeetPhoto}
          layout='responsive'
          alt='Background-image'
        />
      </div>

      <div className='p-6'>
        <h1 className='text-2xl mb-5'>About Me</h1>

        <div className='flex gap-2'>
          <div>
            <h1 className='text-3xl'>Based on Tangerang, Indonesia.</h1>

            <p>
              Im currently living in Tangerang, just finished my college
              majoring computer science program at Bina Nusantara University.
            </p>
          </div>

          <div>
            <h1 className='text-3xl'>Been in this game since 2 years ago ..</h1>
            <p>
              I have experience in different projects, with different methods
              and frameworks. Mostly i do front-end at websites, but i do full
              stack at some projects. Im currently loving to use typescript at
              my latest project with netra.
            </p>
          </div>
        </div>

        <ParallaxBanner
          layers={[{ image: "/public/assets/photos/IMG_2727.jpeg", speed: 20 }]}
          className='aspect-[2/1]'
        />
      </div>
    </section>
  );
}
