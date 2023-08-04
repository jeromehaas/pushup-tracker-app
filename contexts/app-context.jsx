'use client';

// IMPORTS
import { createContext, useMemo } from 'react';
import { getPushupsQuery } from 'queries/pushups.js';
import { useQuery } from 'react-query';

// CREATE CONTEXT
const AppContext = createContext();

// CREATE PROVIDER
const AppProvider = ({ children }) => {

  const data = {
    a: '1', 
    b: '2', 
    c: '3',
  };

  const createPushups = ({ user, amount }) => {
    console.log(`${ user } made ${ amount } pushups...`);
  };

  const getPushups = () => {
    
    const { data: pushups, refetch: refetchPushups } = useQuery({
      queryKey: ['pushups'],
      queryFn: () => getPushupsQuery(),
      initialData: [],
    });

    console.log(pushups);

  };



  const value = useMemo(() => ({
    createPushups,
    getPushups,
  }), []);

  
  // RENDER
  return (
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  );

};

// EXPORTS
export { AppContext, AppProvider };


