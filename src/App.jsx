import Header from 'components/layouts/Header';
import RouterLayout from 'components/layouts/RouterLayout';
import './i18n'; // Подключение i18n
function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <RouterLayout />
    </>
  );
}

export default App;
