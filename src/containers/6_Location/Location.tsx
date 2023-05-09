import styles from './Location.modules.less';
import React, { FC } from 'react';
import '@src/variables.less';
import { ContentButton } from '@src/components/Button/ContentButton';
import { Title } from '@src/components/Title/Title';
import phone_xl from '@src/assets/phone.png';
import phone_xs from '@src/assets/phone_xs.png';
import bg_lg from '@src/assets/participate.png';
import bg_md from '@src/assets/participate_md.png';
import bg_xs from '@src/assets/participate_xs.png';
import toggle_up from '@src/assets/toggle_up.svg';

interface ITextBlock {
  title: string;
  desc: any;
}

const TextBlock: FC<ITextBlock> = ({ title, desc }) => (
  <div className={styles.textBlock}>
    <h3 className={styles.subtitle}>{title}</h3>
    <span className={styles.description}>{desc} </span>
  </div>
);

export function Location() {
  return (
    <section className={styles.page} id='location'>
      <div className={styles.background}>
        <img className={styles.backgroundImg} srcSet={`${bg_lg} 3840w, ${bg_md} 2400w, ${bg_xs} 1292w`}
             src={bg_lg} sizes={`(min-width: 767px) 100vw, 0vw`} />

        <div className={styles.container}>
          <Title title={'локация'} />

          <div className={styles.content}>
            <div className={styles.image}>
              <img srcSet={`${phone_xl} 1386w, ${phone_xs} 980w`} sizes={`(min-width: 767px) 50vw, 100vw`}
                   alt={''}></img>
            </div>

            <div className={styles.location}>
              <TextBlock
                title={'где?'}
                desc={
                  <html>
                  Дворец Молодежи Рыбинска
                  <br />
                  (ул.Луговая, 17)
                  </html>
                }
              />
              <TextBlock title={'когда?'} desc={'27 мая в 12:30'} />
              <ContentButton text={'Хочу участвовать'} />
            </div>
          </div>
          <a href={'#header'} className={styles.toggle}>
            <img width={75} src={toggle_up} />
          </a>
        </div>

      </div>
    </section>
  );
}
