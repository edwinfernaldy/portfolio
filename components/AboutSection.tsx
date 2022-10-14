import Image from "next/image";
import Jumbotron from "./Jumbotron";
import SingAlley from "/public/assets/photos/IMG_1459.jpg";

export default function aboutSection() {
  return (
    <section className='h-screen flex gap-1 p-5 overflow-hidden'>
      <div className='relative w-full flex-grow h-full'>
        <Image
          className='saturate-0 h-full'
          src={SingAlley}
          layout='fill'
          objectFit='cover'
          alt='close-up-me'
        />
      </div>

      <div className='p-6 flex flex-col gap-4'>
        <Jumbotron className='mb-5 xl:text-7xl'>About Me</Jumbotron>

        <div className='flex flex-col md:flex-row gap-5'>
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

        <div className='relative h-full'>
          <Image
            layout='fill'
            objectFit='cover'
            className='h-full saturate-0'
            src={SingAlley}
            alt='me'
          />
        </div>
      </div>
    </section>
  );
}
