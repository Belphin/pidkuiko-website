import { useTranslation } from 'react-i18next';
import 'styles/home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="container">
        <img
          id="home-page-img"
          src="imgs/Home_Page_Image.png"
          alt="Home page image"
        />

        <h2 className="slider-text">
          <strong>{t('suchCompaniesTrustUs')}:</strong>
        </h2>
      </div>

     
    </main>
  );
};

export default Home;
