import React from 'react';
import styles from './Program.modules.less';
import { Timeline } from '@src/containers/4_Program/Timeline/Timeline';
import { Title } from '@src/components/Title/Title';
import waveL_xl from '@src/assets/blocks/wave_left.svg'
import waveR_xl from '@src/assets/blocks/wave_right.svg'

export function Program() {
  return (
    <section className={styles.page} id='program'>
      <img src={waveL_xl} className={styles.wave_l} alt={''} />
      <img src={waveR_xl} className={styles.wave_r} alt={''} />

      <div className={styles.container}>
        <Title title={'программа мероприятия'} subtitle={'27.05.2023'} />
        <div className={styles.content}>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
