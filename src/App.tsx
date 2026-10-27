import React from 'react';
import { RouterProvider, useRouter } from './router/Router';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { path } = useRouter();

  const renderCurrentPage = () => {
    if (path.startsWith('/projects/')) return <ProjectDetailPage />;
    switch (path) {
      case '/projects':
        return <ProjectsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return <Layout>{renderCurrentPage()}</Layout>;
};

export function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
