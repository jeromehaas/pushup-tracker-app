// IMPORTS
import { getPushups } from 'services/pushups.js';

// GET 
const handler = async (req, res) => {

  // TRY-CATCH BLOCK
  try {

    const pushups = await getPushups();
    res.status(200).send(pushups);

    
  } catch (error) {
    console.log(error.message);
    res.status(500).send();
  } 
  // const pushups = await Pushups.findAll();
  // console.log(pushups);

  // return NextResponse.json( { pushups: ['one', 'two', 'three' ] });

};


export default handler;
