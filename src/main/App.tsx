import React from 'react';
import SmoothScroll from "smooth-scroll";

import { Navbar } from '@src/containers/0_Navbar/Navbar';
import { Header } from '@src/containers/1_Header/Header';
import { Blocks } from '@src/containers/3_Blocks/Blocks';
import { Program } from '@src/containers/4_Program/Program';
import Footer from '@src/containers/10_Footer/Footer';
import { About } from '@src/containers/2_About/About';
import { Toggles } from '@src/containers/5_Toggle/Toggles';

import styles from './App.modules.less';
import { Location } from '@src/containers/6_Location/Location';
import { AboutSM } from '@src/containers/2_About/AboutSM';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);




  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>{<Navbar />}</header>
      <main className={styles.main}>
        <Header />
        {width > 767 ? <About /> : <AboutSM /> }

        <Blocks />
        <Program />
        <Toggles />
        <Location/>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
)};
