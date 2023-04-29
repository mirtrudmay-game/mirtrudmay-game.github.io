import * as React from 'react';
import { FC } from 'react';
import styles from '@src/components/Button/Button.modules.less';

interface IContentButton {
  text: string;
}

export const ContentButton: FC<IContentButton> = ({ text }) => (
  <button className={styles.contentButton}><a href={"https://forms.gle/SQ7h1vU7YfEvmMrV6"}>{text}</a></button>
);
