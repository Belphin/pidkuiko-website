import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      about: 'О Нас',
      services: 'Услуги',
      reviews: 'Отзывы',
      contacts: 'Контакты',
      ukr: 'Укр',
      rus: 'Рус',
      order: 'Заказать',
      suchCompaniesTrustUs: 'Нам доверяют такие компании',
    },
  },
  uk: {
    translation: {
      about: 'Про Нас',
      services: 'Послуги',
      reviews: 'Відгуки',
      contacts: 'Контакти',
      ukr: 'Укр',
      rus: 'Рус',
      order: 'Замовити',
      suchCompaniesTrustUs: 'Нам довіряють такі компанії',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
