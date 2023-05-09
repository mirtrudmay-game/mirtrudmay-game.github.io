import React from 'react';
import student from '@src/assets/student_xs.png';
import animated_text from '@src/assets/animated_text.svg';
import { Title } from '@src/components/Title/Title';
import styles from './About.modules.less';
import circle from '@src/assets/text_background.svg';


export function AboutSM() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>

        <Title title='о проекте' />

        <div className={styles.content}>
          <div className={styles.promoTop}>
            <img className={styles.circle} src={circle} />
            <p className={styles.text_sm}>
              Присоединяйся к нашей интеллектуальной игре, ты узнаешь много
              нового о профессиях, актуальных и для Ярославской области.
            </p>
          </div>

          <div className={styles.promoBottom}>
            <img className={styles.circle} src={circle} />
            <p className={styles.text_sm}>
              Игра будет проходить в рамках квиза в несколько этапов: фильмы и
              мультфильмы, музыкальный блок, логические вопросы, загадки и
              многое другое.
            </p>
          </div>

          <div className={styles.imageSM}>
            <img src={animated_text} id={'#Vector'} className={styles.animation} />
            <img src={student} className={styles.student} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
