// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric' })}>
          { new Date(edge.node.frontmatter.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric' }).split('/').join('.')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <Link className={styles['feed__item-link-wrap']} to={edge.node.fields.slug}>
          <h2 className={styles['feed__item-title']}>{edge.node.frontmatter.title}</h2>
        </Link>
      </div>
    ))}
  </div>
);

export default Feed;
