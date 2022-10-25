import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HobbySection from "../components/HobbySection";
import LandingSection from "../components/LandingSection";
import WorksSection from "../components/WorksSection";

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

        <WorksSection />

        <ContactSection />
      </main>
    </>
  );
};

export default Home;
