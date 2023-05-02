import React from 'react';
import styles from './Header.modules.less';
import teacher_and_doctor_xl from '@src/assets/teacher_and_doctor.png';
import teacher_and_doctor_xs from '@src/assets/teacher_and_doctor_xs.png';
import builder from '@src/assets/builder.png';
import builder_xs from '@src/assets/builder_xs.png';
import { ContentButton } from '@src/components/Button/ContentButton';

export const Header = () => (
  <section className={styles.page} id="header">
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
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

        <div className={styles.image}>
          <img srcSet={`${teacher_and_doctor_xl} 1920w, ${teacher_and_doctor_xs} 767px`} src={teacher_and_doctor_xl}
               alt='учитель и врач' />
        </div>
        <div className={styles.builder}>
          <img src={builder}
               srcSet={`${builder} 880w, ${builder_xs} 600px`}
               sizes='(max-width: 992px) 0, 40vw'
               alt='строитель' />

        </div>
      </div>
    </div>
  </section>
);
