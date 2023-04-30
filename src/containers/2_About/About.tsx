import React from 'react';
import student from '@src/assets/student.png';
import animated_text from "@src/assets/animated_text.svg"
import { Title } from '@src/components/Title/Title';
import styles from './About.modules.less';

export function About() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>

        <Title title='о проекте' />

        <div className={styles.content}>
          <div className={styles.promo}>
            <div className={styles.text}>
              <p>
                Присоединяйся к нашей интеллектуальной игре, ты узнаешь много
                нового о профессиях, актуальных и для Ярославской области.
              </p>
              <p>
                Игра будет проходить в рамках квиза в несколько этапов: фильмы и
                мультфильмы, музыкальный блок, логические вопросы, загадки и
                многое другое.
              </p>
            </div>
          </div>

          <div className={styles.image}>
            <img src={animated_text} id={"#Vector"} className={styles.animation}/>
            <img src={student} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
