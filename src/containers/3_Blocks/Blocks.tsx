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
import rectangle from "@src/assets/rectangle.png";

export function Blocks() {
  return (
    <section className={styles.page} id="blocks">
      <Title title={'блоки с заданием'} />
      <div className={styles.background}>
        <img className={styles.hash_l}
             sizes={`(min-width: 992px) 50vw, 0`}
             srcSet={`${hashL_xl} 1800w, ${hashL_md} 1200w, ${hashL_xs} 700w`}
             src={hashL_xl}
        />
        <img className={styles.hash_r}
             sizes={`(min-width: 992px) 50vw, 0`}
             srcSet={`${hashR_xl} 1800w, ${hashR_md} 1200w, ${hashR_xs} 700w`}
             src={hashR_xl}
        />

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

              <div className={styles.blocksList}>
                <img className={styles.rectangle} src={rectangle}/>
                <ul className={styles.list}>
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


      </div>
    </section>
  );
}
