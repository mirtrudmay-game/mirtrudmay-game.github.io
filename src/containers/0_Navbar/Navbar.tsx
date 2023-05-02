import React from 'react';
import styles from './Navbar.modules.less';
import Logo from '@src/components/Logo/Logo';
import { NavButton } from '@src/components/Button/NavButton';

const Menu = () => (
  <div className={styles.menu}>
    <nav>
      <ul className={styles.menuNav}>
        <li className={styles.menuItem}><a href={"#about"}>О проекте</a></li>
        <li className={styles.menuItem}><a href={"#blocks"}>Блоки</a></li>
        <li className={styles.menuItem}><a href={"#program"}>Программа мероприятия</a></li>
        <li className={styles.menuItem}><a href={"#location"}>Локация</a></li>
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
