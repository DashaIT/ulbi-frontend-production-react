import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton, ButtonTheme } from '@/shared/ui/AppButton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppText } from '@/shared/ui/AppText/AppText';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { RoutePath } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;
    const { t } = useTranslation();

    const types = <AppText text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <AppText text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <AppText text={article.user.username} className={cls.username} />
                        <AppText text={article.createdAt} className={cls.date} />
                    </div>
                    <AppText title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <AppButton theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </AppButton>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <AppText text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <AppText text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
