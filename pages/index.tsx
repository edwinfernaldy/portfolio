import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import LandingSection from "../components/LandingSection";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";

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

      <main>
        <LandingSection />

        <AboutSection />
      </main>
    </>
  );
};

export default Home;
