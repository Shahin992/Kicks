import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/home/HomePage';
import ProductDetailPage from '@/pages/product-detail/ProductDetailPage';
import ProductsPage from '@/pages/products/ProductsPage';
import { ROUTES } from '@/constants/routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.products} element={<ProductsPage />} />
        <Route path={ROUTES.productDetail} element={<ProductDetailPage />} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
