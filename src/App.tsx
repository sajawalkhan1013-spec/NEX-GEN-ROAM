import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/contexts/CartContext';
import { Layout } from '@/components/layout/Layout';

import routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <IntersectObserver />
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
        <Toaster />
      </CartProvider>
    </Router>
  );
};

export default App;
