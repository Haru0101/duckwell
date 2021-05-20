// @flow strict
import React from 'react';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Published {new Date(date).toLocaleDateString('ko-KR', {  year: 'numeric', month: 'numeric', day: 'numeric' }).split('/').join('.')}</p>
  </div>
);

export default Meta;
