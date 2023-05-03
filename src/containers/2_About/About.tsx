import React from 'react';
import student from '@src/assets/student.png';
import student_xs from '@src/assets/student_xs.png';
import animated_text from "@src/assets/animated_text.svg"
import vector from "@src/assets/vectors_about/vector.svg"
import bands from "@src/assets/vectors_about/bands.svg"
import circle from "@src/assets/text_background.svg"
import { Title } from '@src/components/Title/Title';
import styles from './About.modules.less';


export function About() {
  return (
    <section className={styles.page} id="about">
      <img src={vector} className={styles.bg_vector} sizes={`100vw`} />
      <img src={bands} className={styles.bg_bands} sizes={`100vw`} />

      <div className={styles.container}>
        <Title title='о проекте' />

        <div className={styles.content}>
          <div className={styles.promo}>
            <img className={styles.circle} src={circle}/>
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
            <img src={animated_text} className={styles.animation}/>
            <img srcSet={`${student} 1023w, ${student_xs} 660w`} sizes={`(min-width: 767px) 50vw, 70vw`} src={student} className={styles.student} alt='студент' />
          </div>
        </div>
      </div>
    </section>
  );
}
