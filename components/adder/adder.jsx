'use client';

import { useState, useEffect, useRef } from 'react';

const Adder = () => {

  // SETUP STATE
  const [counter, setCounter] = useState(0);

  // SETUP REFS
  const timeout = useRef(null);

  // HANDLE CLICK
  const handleClick = () => {

    // ADD VALUE TO COUNTER
    setCounter((value) => value + 10);

    // CLEAR TIMEOUT
    clearTimeout(timeout.current);

    // SETUP TIMEOUT
    timeout.current = setTimeout(() => {
      setCounter(0);
    }, 3000);

  };

  useEffect(() => {
    
  }, []);

  // RENDER
  return (
    <button className="adder" type="button" onClick={ handleClick }>{ counter || '+' }</button>
  );

};

// EXPORTS
export default Adder;
