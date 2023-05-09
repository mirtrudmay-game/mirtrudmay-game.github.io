import React, { FC } from 'react';
import styles from './Title.modules.less';

interface IPageTitle {
  title: string;
  subtitle?: string;
}

export const Title: FC<IPageTitle> = ({ title, subtitle }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
  </div>
);
