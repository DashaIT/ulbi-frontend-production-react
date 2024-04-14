import { FC, lazy } from 'react';
import { ArticleDetailsPageProps } from './ArticleDetailsPage';

export const ArticleDetailsPageAsync = lazy<FC<ArticleDetailsPageProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
