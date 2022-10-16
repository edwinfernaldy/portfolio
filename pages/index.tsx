import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import HobbySection from "../components/HobbySection";
import LandingSection from "../components/LandingSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edwin Fernaldy | Web Developer</title>
        <meta
          name='description'
          content='portfolio website of Edwin Fernaldy.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='overflow-hidden'>
        <LandingSection />

        <AboutSection />

        <HobbySection />
      </main>
    </>
  );
};

export default Home;
