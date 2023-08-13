import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');// передаем название name-space, default: 'translation'
    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
