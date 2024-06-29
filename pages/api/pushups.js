// IMPORTS
import { getPushups } from 'services/pushups.js';

// GET 
const handler = async (req, res) => {

  // TRY-CATCH BLOCK
  try {

		// GET AND SEND PUSHUPS
    const pushups = await getPushups();
    res.status(200).send(pushups);

    
	// HANDLE ERRORS
  } catch (error) {

		// SEND ERROR RESPONSE
    res.status(500).send();

  };

};

// EXPORTS
export default handler;
