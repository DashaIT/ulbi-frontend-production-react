import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AdminPanelPage">
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;
