import React from 'react';
import styles from './Program.modules.less';
import { Timeline } from '@src/containers/4_Program/Timeline/Timeline';
import { Title } from '@src/components/Title/Title';

export function Program() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <Title title={'программа мероприятия'} subtitle={'27.05.2023'} />
        <div className={styles.content}>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
