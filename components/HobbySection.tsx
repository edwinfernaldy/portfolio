import Image from "next/image";
import Billiards from "/public/assets/photos/billiards.jpg";
import Badminton from "/public/assets/photos/shuttlekok.jpg";
import Coding from "/public/assets/photos/code.jpg";
import Gaming from "/public/assets/photos/games.jpg";

export default function HobbySection() {
  return (
    <section className='flex flex-col gap-6 bg-black'>
      <div className='relative h-max'>
        <h1 className='absolute text-7xl md:text-8xl px-6 z-20 w-fit text-white'>
          &rsquo; Its just my thing.. &rsquo;
        </h1>
        <div className='absolute w-full border border-black top-1/2 inset-x-0 z-0'></div>
      </div>

      <div className='relative h-[50vh]'>
        <div className='absolute inset-0 z-0'>
          <Image
            className='bg-fixed object-cover saturate-0'
            src={Billiards}
            alt='pool-bg'
            layout='fill'
          />
        </div>

        <div className='z-10 px-6 absolute left-1/2 top-1/2 text-white'>
          <h1 className='text-3xl'>Billiards</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            enim neque eius iste alias aspernatur eum, vitae, placeat voluptates
            suscipit cupiditate, illum ea quia nobis exercitationem harum
            delectus et est?
          </p>
        </div>
      </div>

      <div className='relative h-[50vh]'>
        <div className='absolute inset-0 z-0'>
          <Image
            className='bg-fixed object-cover saturate-0'
            src={Badminton}
            alt='pool-bg'
            layout='fill'
          />
        </div>

        <div className='z-10 px-6 absolute right-1/2 top-1/2 text-white'>
          <h1 className='text-3xl'>Badminton</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            enim neque eius iste alias aspernatur eum, vitae, placeat voluptates
            suscipit cupiditate, illum ea quia nobis exercitationem harum
            delectus et est?
          </p>
        </div>
      </div>

      <div className='relative h-[50vh]'>
        <div className='absolute inset-0 z-0'>
          <Image
            className='bg-fixed object-cover saturate-0'
            src={Coding}
            alt='pool-bg'
            layout='fill'
          />
        </div>

        <div className='z-10 px-6 absolute left-1/2 top-1/2 text-white'>
          <h1 className='text-3xl'>Code</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            enim neque eius iste alias aspernatur eum, vitae, placeat voluptates
            suscipit cupiditate, illum ea quia nobis exercitationem harum
            delectus et est?
          </p>
        </div>
      </div>

      <div className='relative h-[50vh]'>
        <div className='absolute inset-0 z-0'>
          <Image
            className='bg-fixed object-cover saturate-0'
            src={Gaming}
            alt='pool-bg'
            layout='fill'
          />
        </div>

        <div className='z-10 px-6 absolute right-1/2 top-1/2 text-white'>
          <h1 className='text-3xl'>Gaming</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            enim neque eius iste alias aspernatur eum, vitae, placeat voluptates
            suscipit cupiditate, illum ea quia nobis exercitationem harum
            delectus et est?
          </p>
        </div>
      </div>
    </section>
  );
}
