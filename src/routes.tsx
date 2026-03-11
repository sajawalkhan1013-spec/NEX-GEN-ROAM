import Home from './pages/Home';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';
import Regions from './pages/Regions';
import Global from './pages/Global';
import NotFound from './pages/NotFound';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'Countries',
    path: '/countries',
    element: <Countries />,
  },
  {
    name: 'Country Detail',
    path: '/country/:id',
    element: <CountryDetail />,
    visible: false,
  },
  {
    name: 'Regions',
    path: '/regions',
    element: <Regions />,
  },
  {
    name: 'Global',
    path: '/global',
    element: <Global />,
  },
  {
    name: 'Not Found',
    path: '*',
    element: <NotFound />,
    visible: false,
  },
];

export default routes;
