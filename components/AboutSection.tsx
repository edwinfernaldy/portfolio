import Image from "next/image";
import Jumbotron from "./Jumbotron";
import SingAlley from "/public/assets/photos/IMG_1459.jpg";
import Guitaring from "/public/assets/photos/IMG_3204.jpeg";

export default function aboutSection() {
  return (
    <section className='h-screen flex gap-1 p-5 overflow-hidden'>
      <div className='relative w-full flex-grow h-full hidden lg:block'>
        <Image
          className='saturate-0 h-full'
          src={Guitaring}
          layout='fill'
          objectFit='cover'
          alt='close-up-me'
        />
      </div>

      <div className='px-6 flex flex-col gap-6'>
        <Jumbotron className='mb-5 xl:text-7xl'>About Me</Jumbotron>

        <div className='flex flex-col md:flex-row gap-5'>
          <div className='w-3/4'>
            <h1 className='text-3xl'>Based on Tangerang, Indonesia.</h1>

            <p>
              Im currently living in Tangerang, just finished my college
              majoring computer science program at Bina Nusantara University.
              Got my bachelors degree at 2022, so here i am looking for an
              opportunity to share my capabilites and of course to learn from
              others.
            </p>
          </div>

          <div className='w-full'>
            <h1 className='text-3xl'>
              <q>Flexible and Adaptive</q>
            </h1>
            <p>
              I have implemented several frameworks, methods, and technologies
              during my experience, the more knowledge I get the more I get
              inspiration in solving problems. In my opinion, knowledge is all
              that matters because world is growing relatively fast, if we dont
              update our mind and capabilites we may struggled more than people
              who work for it and learn from it, besides it doesn&lsquo;t hurt
              to learn..
            </p>
          </div>
        </div>

        <div>
          <h1 className='text-3xl'>Thanks for the attention</h1>
          <p>
            For those who viewing this website i hope we&lsquo;ll get in touch
            and make something great together !!
          </p>
        </div>

        <div className='flex items-start gap-1 h-full'>
          <div className='relative w-full h-full'>
            <Image
              layout='fill'
              objectFit='cover'
              className='h-full saturate-0'
              src={SingAlley}
              alt='me'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
