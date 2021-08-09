import { createContext } from 'react';

const AppContext = createContext({
  user: null,
  setToPokelist: () => {}
});

export default AppContext;
