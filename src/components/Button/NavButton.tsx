import * as React from 'react';
import { FC } from 'react';
import styles from '@src/components/Button/Button.modules.less';

interface INavButton {
  text: string;
}

export const NavButton: FC<INavButton> = ({ text }) => (
  <button className={styles.navButton}>{text}</button>
);
