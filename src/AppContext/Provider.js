import React, { useState, useCallback } from 'react';
import AppContext from './Context';

const defaultUser = {
  pokelist: {}
};

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const setToPokelist = useCallback((pokemon) => {
    setUser((currentUser) => ({
      ...currentUser,
      pokelist: {
        ...currentUser.pokelist,
        [pokemon.name]: pokemon
      }
    }));
  }, []);

  return (
    <AppContext.Provider value={{ user, setToPokelist }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
