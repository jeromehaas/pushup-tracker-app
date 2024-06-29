'use client';

// IMPOTS
import { useContext } from 'react';
import { AppContext } from 'contexts/app-context.jsx';

// COMPONENT
const Leader = () => {

	// GET CONTEXT
  const { getPushups } = useContext(AppContext);

	// GET PUSHUPS
  getPushups();

	// RENDER
  return (
    <div className="leader">
      <p>Jérôme is leading with 44'850 pushups</p>
    </div>
  );

};

// EXPORTS
export default Leader;
