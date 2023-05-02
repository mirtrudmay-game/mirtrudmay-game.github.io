import styles from './Location.modules.less';
import React, { FC } from 'react';
import '@src/variables.less';
import { ContentButton } from '@src/components/Button/ContentButton';
import { Title } from '@src/components/Title/Title';
import phone_xl from '@src/assets/phone.png';
import phone_xs from '@src/assets/phone_xs.png';

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
    <section className={styles.page} id="location">
      {/*<img srcset={} src={}></img>*/}{/*      <img src={waveL_xl} sizes="(max-width: 1600px) 10vw, 20vw"
           srcSet={`${waveL_xl} 390w, ${waveL_md} 250w`}/>*/}

      <div className={styles.container}>
        <Title title={'локация'} />

        <div className={styles.content}>
          <div className={styles.image}>
            <img srcSet={`${phone_xl} 1386w, ${phone_xs} 980w`} sizes={`(min-width: 767px) 50vw, 70vw`} alt={''}></img>
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
      </div>
    </section>
  );
}
