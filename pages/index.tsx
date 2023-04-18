import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HobbySection from "../components/HobbySection";
import LandingSection from "../components/LandingSection";
import WelcomeOverlay from "../components/WelcomeOverlay";
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
        <meta name='keywords' content='HTML, CSS, JavaScript, Edwin Fernaldy' />
        <meta name='author' content='Edwin Fernaldy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='overflow-hidden'>
        <WelcomeOverlay />

        <LandingSection />

        <AboutSection />

        <WorksSection />

        <ContactSection />
      </main>
    </>
  );
};

export default Home;
