import toggle from '@src/assets/togle_down.svg';
import React from 'react';
import styles from './Toggle.modules.less';

export const Toggles = () => (
  <div className={styles.container}>
    <div className={styles.toggles}>
      <img className={styles.toggle1} src={toggle}></img>
      <img className={styles.toggle2} src={toggle}></img>
    </div>
  </div>
);
