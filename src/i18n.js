import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uk: {
                translation: {
                    about: "Про нас",
                    services: "Послуги",
                    reviews: "Відгуки",
                    contacts: "Контакти",
                    ukr: "Укр",
                    rus: "Рос",
                    order: "Замовити",
                    TheFollowingCompaniesTrustUs: 'Нам довіряють такі компанії:',
                    PRICEEXCEPTION: 'ЦІНА - ВИЙНЯТОК',
                    QUALITYISTHERULE: 'ЯКІСТЬ - ПРАВИЛО',
                    ServicesofcraneManipulato: ` Послуги крана-маніпулятора, вантажного евакуатора, СТО вантажних
              автомобілів, автозапчастини.`,
                },
            },
            ru: {
                translation: {
                    about: "О нас",
                    services: "Услуги",
                    reviews: "Отзывы",
                    contacts: "Контакты",
                    ukr: "Укр",
                    rus: "Рос",
                    order: "Заказать",
                    TheFollowingCompaniesTrustUs: 'Нам доверяют такие компании:',
                    PRICEEXCEPTION: 'ЦЕНА - ИСКЛЮЧЕНИЕ',
                    QUALITYISTHERULE: 'КАЧЕСТВО – ПРАВИЛО',
                    ServicesofcraneManipulato: `Услуги крана-манипулятора, грузового эвакуатора, СТО грузовых
              автомобилей, автозапчасти.`,
                },
            },
        },
        lng: "uk", // Язык по умолчанию
        fallbackLng: "uk",
        interpolation: {
            escapeValue: false, // Для работы с React
        },
    });

export default i18n;