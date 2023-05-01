import toggle from '@src/assets/togle_down.svg';
import React from 'react';
import styles from './Toggle.modules.less';

export const Toggles = () => (
  <div className={styles.container}>
    <div className={styles.toggles}>
      <img src={toggle}></img>
      <img src={toggle}></img>
    </div>
  </div>
);
