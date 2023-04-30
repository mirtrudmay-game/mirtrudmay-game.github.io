import React from 'react';

import { Navbar } from '@src/containers/0_Navbar/Navbar';
import { Header } from '@src/containers/1_Header/Header';
import { Blocks } from '@src/containers/3_Blocks/Blocks';
import { Program } from '@src/containers/4_Program/Program';
import Footer from '@src/containers/10_Footer/Footer';
import { About } from '@src/containers/2_About/About';
import { Toggles } from '@src/containers/5_Toggle/Toggles';

import styles from './App.modules.less';

export const App = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>{<Navbar />}</header>
    <main className={styles.main}>
      <Header />
      <About />
      <Blocks />
      <Program />
      {/*<Toggles />*/}
    </main>
    {/*<footer className={styles.footer}>
      <Footer />
    </footer>*/}
  </div>
);
