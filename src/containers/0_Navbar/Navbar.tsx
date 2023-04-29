import React from 'react';
import styles from './Navbar.modules.less';
import Logo from '@src/components/Logo/Logo';
import { NavButton } from '@src/components/Button/NavButton';

const Menu = () => (
  <div className={styles.menu}>
    <nav>
      <ul className={styles.menuNav}>
        <li className={styles.menuItem}>О проекте</li>
        <li className={styles.menuItem}>Блоки</li>
        <li className={styles.menuItem}>Программа мероприятия</li>
        <li className={styles.menuItem}>Локация</li>
      </ul>
    </nav>
    <div className={styles.button}>
      <NavButton text={'Регистрация'} />
    </div>
  </div>
);

export function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo height={60} fontSize={20} />
          <Menu />
        </div>
      </div>
    </>
  );
}
