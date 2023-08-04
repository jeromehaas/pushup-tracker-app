'use client';

import { useContext } from 'react';
import { AppContext } from 'contexts/app-context.jsx';


// COMPONENT
const Leader = () => {

  const { getPushups } = useContext(AppContext);
  getPushups();

  return (
    <div className="leader">
      <p>Jérôme is leading with 44'850 pushups</p>
    </div>
  );

};

export default Leader;
