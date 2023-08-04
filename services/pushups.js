import Pushups from 'models/pushups.js';

const getPushups = async () => {

  // const pushups = ['one', 'two', 'three'];
  const pushups = await Pushups.findAll();
  console.log(pushups);
  return pushups;

};

export {
  getPushups,
};
