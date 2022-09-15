import { Parallax } from "react-scroll-parallax";

export default function LandingSection() {
  return (
    <section className='flex h-screen items-center lg:px-28 px-14'>
      <Parallax easing={"easeInOutCirc"} speed={50}>
        <h1 className='lg:text-7xl text-3xl'>
          Hi,
          <br />
          I&#39;m <span>E</span>dwin <span>F</span>ernaldy,
          <br />
          web developer
        </h1>
      </Parallax>
    </section>
  );
}
