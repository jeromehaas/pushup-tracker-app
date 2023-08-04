import axios from 'axios';

const createPushupsQuery = async () => {
  // const response = axios({
  //   method: 'POST', 
  //   url: '/api/pushups',
  // });
  // console.log(reponse);
  console.log('create push up query');
};

const getPushupsQuery = async () => {
  const greeter = 'greet me';
  const response = await axios({
    method: 'GET',
    url: '/api/pushups',
  });
  console.log(response);
  return response;
};

export {
  createPushupsQuery,
  getPushupsQuery,
};


