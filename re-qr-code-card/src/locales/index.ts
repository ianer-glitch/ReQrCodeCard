import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './languages/index';

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ptBR',
        fallbackLng: 'ptBR',
        interpolation: {
            escapeValue: false,
        },
    })

export type LanguageResourcesType = keyof typeof resources;

export {
    useTranslation,
} from './hooks/useTranslation';

export default i18next;