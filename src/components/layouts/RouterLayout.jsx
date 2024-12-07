import routes from 'constants/routes';
import { Route, Routes } from 'react-router-dom';

const RouterLayout = () => {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RouterLayout;
