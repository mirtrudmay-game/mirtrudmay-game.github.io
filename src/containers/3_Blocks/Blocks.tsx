import styles from './Blocks.modules.less';
import React, { useEffect, useState } from 'react';
import student from '@src/assets/student_girl.png';
import { Title } from '@src/components/Title/Title';

export function Blocks() {
  return (
    <section className={styles.page}>
      <Title title={'блоки с заданием'} />
      <div className={styles.container}>

        <div className={styles.content}>
          <div className={styles.image}>
            <img src={student}></img>
          </div>

          <div className={styles.blocks}>
            <p className={styles.description}>
              Задания состоят из 5 блоков.
              <br /> Каждый блок посвящен определенной деятельности:
            </p>

            <div className={styles.blocksListWrapper}>
              <ul className={styles.blocksList}>
                <li className={styles.listElement}>педагогика</li>
                <li className={styles.listElement}>медицина</li>
                <li className={styles.listElement}>сельское хозяйство</li>
                <li className={styles.listElement}>авиация</li>
                <li className={styles.listElement}>юриспруденция</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
