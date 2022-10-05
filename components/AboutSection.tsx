import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";
import edwin from "/public/assets/photos/IMG_2727.jpeg";

export default function aboutSection() {
  return (
    <section>
      <div className='p-6 w-full'>
        <h1 className='text-2xl'>About Me</h1>

        <p></p>

        <ParallaxBanner
          layers={[{ image: "/public/assets/photos/IMG_2727.jpeg", speed: 20 }]}
          className='aspect-[2/1]'
        />
      </div>
    </section>
  );
}
