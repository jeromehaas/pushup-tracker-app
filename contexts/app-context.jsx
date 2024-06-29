'use client';

// IMPORTS
import { createContext, useMemo } from 'react';
import { getPushupsQuery } from 'queries/pushups.js';
import { useQuery } from 'react-query';

// CREATE CONTEXT
const AppContext = createContext();

// CREATE PROVIDER
const AppProvider = ({ children }) => {

	// SETUP DATA
  const data = {
    a: '1', 
    b: '2', 
    c: '3',
  };

	// CREATE PUSHUPS
  const createPushups = ({ user, amount }) => {

		// PRINT INFO
    console.log(`${ user } made ${ amount } pushups...`);

  };

	// GETN PUSHUPS
  const getPushups = () => {
    
		// SET QUERY
    const { data: pushups, refetch: refetchPushups } = useQuery({
      queryKey: ['pushups'],
      queryFn: () => getPushupsQuery(),
      initialData: [],
    });

		// PRINT INFO
    console.log(pushups);

  };


	// MEMOIZE FUNCTIONS
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


