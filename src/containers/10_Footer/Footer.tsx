import React from 'react';
import styles from './Footer.modules.less';
import Logo from '@src/components/Logo/Logo';
import vk from '@src/assets/vk.svg';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.promo}>
            <Logo height={50} fontSize={16} />
            <h4 className={styles.title}>Присоединяйся к нам в соцсетях!</h4>
            <a href={'#'} className={styles.vk}>
              <img src={vk} alt={'Ссылка на группу ВКонтакте'}></img>
            </a>
          </div>

          <div>
            <h4 className={styles.title}>Информация</h4>
            <nav className={styles.text}>
              <ul>
                <li>
                  <a href={''} className={styles.navLink}>
                    О проекте
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.navLink}>
                    Блоки
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.navLink}>
                    Программа мероприятия
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.navLink}>
                    Локация
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.documentLink}>
                    Положение
                  </a>
                </li>
                <></>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className={styles.title}>Контакты</h4>
            <div className={styles.text}>
              <span>mirtrudmay.game@gmail.com</span>
            </div>
          </div>
          <span className={styles.copyright}>© МирТрудМай, 2023</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
