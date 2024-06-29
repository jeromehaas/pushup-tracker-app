// IMPORTS
import axios from 'axios';

// CREATE PUSHUP-QUERY
const createPushupsQuery = async () => {

	// PRINT INFO
  console.log('create push up query');

};

// GET PUSHUP-QUERY
const getPushupsQuery = async () => {

	// SEND REQUEST
  const response = await axios({
    method: 'GET',
    url: '/api/pushups',
  });

	// RETURN RESPONSE
  return response;
};

// EXPORTS
export {
  createPushupsQuery,
  getPushupsQuery,
};


