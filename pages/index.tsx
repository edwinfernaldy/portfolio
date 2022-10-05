import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import LandingSection from "../components/LandingSection";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edwin Fernaldy | Web Developer</title>
        <meta
          name='description'
          content='portfolio website of Edwin Fernaldy.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />

        <div className='lg:px-28 px-14'>
          <LandingSection />

          <AboutSection />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
