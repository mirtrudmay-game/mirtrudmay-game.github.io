import React, { FC } from 'react';
import styles from './Logo.modules.less';
import logo from '@src/assets/logo.svg';

interface ILogo {
  height: number;
  fontSize: number;
}

const Logo: FC<ILogo> = (height, fontSize) => {
  return (
    <a href='#' className={styles.logo}>
      <img src={logo} style={{ maxHeight: `${height}px` }} alt='' />
      <span className={styles.logoText} style={{ fontSize: `${fontSize}px` }}>
        Мир Труд Май
      </span>
    </a>
  );
};

export default Logo;
