import styles from './Blocks.modules.less';
import React, { useEffect, useState } from 'react';
import student from '@src/assets/student_girl.png';
import { Title } from '@src/components/Title/Title';
import hashL_xl from '@src/assets/blocks/hash_l.png'
import hashL_md from '@src/assets/blocks/hash_l_md.png'
import hashL_xs from '@src/assets/blocks/hash_l_xs.png'
import hashR_xl from '@src/assets/blocks/hash_r.png'
import hashR_md from '@src/assets/blocks/hash_r_md.png'
import hashR_xs from '@src/assets/blocks/hash_r_xs.png'

export function Blocks() {
  return (
    <section className={styles.page}>
      <img className={styles.hash_l}
        srcSet={`${hashL_xl} 1920w, ${hashL_md} 1600w, ${hashL_xs} 1200w`}
        src={hashL_xl}
        />
      <img className={styles.hash_r}
           srcSet={`${hashR_xl} 1920w, ${hashR_md} 1600w, ${hashR_xs} 1200w`}
           src={hashR_xl}
      />

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
