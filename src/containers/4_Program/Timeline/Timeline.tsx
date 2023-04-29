import React, { FC } from 'react';
import styles from './Timeline.modules.less';

interface IEvent {
  time: string;
  title: string;
  desc: string;
}

const Event: FC<IEvent> = ({ time, title, desc }) => (
  <li className={styles.event} data-date={time}>
    <h3 className={styles.title}>{title}</h3>
    <span className={styles.desc}>{desc}</span>
  </li>
);

export function Timeline() {
  return (
    <div className={styles.timelineWrapper}>
      <ul className={styles.timeline}>
        <Event
          time='12:30-13:00'
          title='Сбор участников'
          desc='(вручение сувенирной продукции, работа фотозоны, распределение команд по местам)'
        />
        <Event
          time='13:00'
          title='Начало мероприятия'
          desc='(выступление ректора РГАТУ имени П.А.Соловьёва, начало игры)'
        />
        <Event
          time='14:00-14:20'
          title='Перерыв'
          desc='(подсчет баллов жюри, работа фотозоны)'
        />
        <Event time='14:00' title='Продолжение мероприятия' desc='' />
        <Event
          time='15:00'
          title='Завершение мероприятия'
          desc='(подведение итогов, награждение победителей)'
        />
      </ul>
    </div>
  );
}
