import React from 'react';
import styles from './Footer.modules.less';
import Logo from '@src/components/Logo/Logo';
import vk from '@src/assets/vk.svg';
import document from '@src/assets/document.svg';
import mail from '@src/assets/mail.svg';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Logo height={50} fontSize={16} />
          </div>

          <div className={styles.info}>
            <h4 className={styles.title}>Информация</h4>
            <nav className={styles.text}>
              <ul>
                <li>
                  <a href={'#about'} className={styles.navLink}>
                    О проекте
                  </a>
                </li>
                <li>
                  <a href={'#blocks'} className={styles.navLink}>
                    Блоки
                  </a>
                </li>
                <li>
                  <a href={'#program'} className={styles.navLink}>
                    Программа мероприятия
                  </a>
                </li>
                <li>
                  <a href={'#location'} className={styles.navLink}>
                    Локация
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.linkWithImg}>
                    <img src={document} width={20}></img>
                    Положение
                  </a>
                </li>
                <></>
              </ul>
            </nav>
          </div>

          <div className={styles.contacts}>
            <h4 className={styles.title}>Контакты</h4>
            <div className={styles.text}>
              <a href={"mailto:mirtrudmay.game@gmail.com"} className={styles.linkWithImg}>
                <img src={mail} width={20}></img>
                <span>mirtrudmay.game@gmail.com</span></a>
            </div>
          </div>
          <div className={styles.promo}>
            <h4 className={styles.title}>Присоединяйся к нам в соцсетях!</h4>
            <a href={'https://vk.com/mirtrudmay.game'} className={styles.vk}>
              <img width={25} src={vk} alt={'Ссылка на группу ВКонтакте'}></img>
            </a>
          </div>

          <span className={styles.copyright}>© МирТрудМай, 2023</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
