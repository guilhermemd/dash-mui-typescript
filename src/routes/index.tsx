import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
  const { handleSetDrawerOptions } = useDrawerContext();

  useEffect(() => {
    handleSetDrawerOptions([
      { label: 'Página Inicial', icon: 'home', path: './pagina-inicial' }
    ]);
  }, [handleSetDrawerOptions]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
