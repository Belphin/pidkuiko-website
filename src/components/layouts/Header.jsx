import { useTranslation } from 'react-i18next';
import 'styles/header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <header>
      <img src="imgs/Logo_Pidkuiko_New.png" alt="Logo Pidkuiko" />

      <nav>
        <p>{t('about')}</p>
        <p>{t('services')}</p>
        <p>{t('reviews')}</p>
        <p>{t('contacts')}</p>
      </nav>

      <div className="right-side-of-header">
        <div className="language-phone-container">
          <div className="language-phone-container__language-selector">
            <p
              className={i18n.language === 'uk' ? 'text-active' : ''}
              onClick={() => changeLanguage('uk')}
            >
              {t('ukr')}
            </p>
            <hr />
            <p
              className={i18n.language === 'ru' ? 'text-active' : ''}
              onClick={() => changeLanguage('ru')}
            >
              {t('rus')}
            </p>
          </div>

          <p className="language-phone-container__phone">+38 (050) 305-15-55</p>
        </div>

        <a>
          <div style={{ width: '190px' }} className="button button-primary">
            {t('order')}
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
