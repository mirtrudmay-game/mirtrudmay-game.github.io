import React from 'react';
import styles from './Header.modules.less';
import teacher_and_doctor from '@src/assets/teacher_and_doctor.png';
import builder from '@src/assets/builder.png';
import { ContentButton } from '@src/components/Button/ContentButton';

export const Header = () => (
  <section className={styles.page}>
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <div className={styles.title}>
            <h1 className={styles.titleText}>Интеллектуальная игра</h1>
            <h1 className={styles.colorTitleText}>для студентов</h1>
          </div>

          <p className={styles.description}>
            Собирай команду от 4 до 6 человек, возьми с собой хорошее настроение
            и боевой настрой
          </p>
          <ContentButton text={'Участвовать'} />
        </div>

        <div>
          <img src={teacher_and_doctor} alt='' />
        </div>
        <div className={styles.builder}>
          <img src={builder} alt='' />
        </div>
      </div>
    </div>
  </section>
);
