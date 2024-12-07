import { useTranslation } from 'react-i18next';
import 'styles/home.css';
import { homePageSliderLogos } from 'constants/sliderLogos';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="container">
      <article className="article-container">
      <div className="image-wrapper">
        <img
          id='home-page-img'
          src={`${process.env.PUBLIC_URL}/imgs/Home_Page_Image.png`}
          alt=""
        />
        <div className="text-conteiner">
          <p className="overlay-text">
            <h1 className="text">{t('PRICEEXCEPTION')}</h1>
            <h1 className="text1">{t('QUALITYISTHERULE')} </h1>
            <span className="text2">
              {t('ServicesofcraneManipulato')}
            </span>
            <a>
        <div style={{ width: '190px', marginBottom:'34px', marginTop: 24}} className="button button-primary">
          {t('order')}
        </div>
      </a>
          </p>
        </div>
      </div>
    </article>
        <div className="mainContainer">
          <h2 >
            <strong className="slider-text">{t('TheFollowingCompaniesTrustUs')}</strong>
          </h2>
          <div className="imageGrid">
            <div className="imageSet">
              {homePageSliderLogos.map((logo, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}${logo.src}`} 
                  alt={`logo-${index + 1}`}
                  className="mainImg"
                />
              ))}
            </div>
            <div className="imageSet">
              {homePageSliderLogos.map((logo, index) => (
                <img
                  key={`copy-${index}`}
                  src={`${process.env.PUBLIC_URL}${logo.src}`} 
                  alt={`logo-${index + 1}-copy`}
                  className="mainImg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;