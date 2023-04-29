import styles from './Location.modules.less';
import React, { FC } from 'react';
import phone from '@src/assets/phone.png';
import '@src/variables.less';
import { ContentButton } from '@src/components/Button/ContentButton';
import { Title } from '@src/components/Title/Title';

interface ITextBlock {
  title: string;
  desc: any;
}

const TextBlock: FC<ITextBlock> = ({ title, desc }) => (
  <div className={styles.text}>
    <h3 className={styles.subtitle}>{title}</h3>
    <span className={styles.description}>{desc} </span>
  </div>
);

export function Location() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <Title title={'локация'} />

        <div className={styles.content}>
          <div className={styles.image}>
            <img src={phone} alt={''}></img>
          </div>

          <div className={styles.text}>
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
