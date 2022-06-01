import { createContext, useState, useCallback, useContext } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

type Props = { children?: React.ReactNode };

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  console.log(isDrawerOpen);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((prevState) => !prevState);
  }, []);

  const contextValue = {
    isDrawerOpen,
    toggleDrawerOpen
  };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};
