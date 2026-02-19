import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#cdcdcc] text-gray-900">
      <Header />
      <main className="mx-auto w-full max-w-[1320px] px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
