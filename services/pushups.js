// IMPORTS
import Pushups from 'models/pushups.js';

// GET PUSHUPS
const getPushups = async () => {


	// GET ALL PUSHUPS
  const pushups = await Pushups.findAll();

	// RETURN PUSHUPS
  return pushups;

};

// EXPORTS
export {
  getPushups,
};
