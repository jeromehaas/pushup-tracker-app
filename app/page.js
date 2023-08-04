// IMPORT 
import Adder from 'components/adder/adder.jsx';
import Leader from 'components/leader/leader.jsx';
import Goal from 'components/goal/goal.jsx';
import Notifier from 'components/notifier/notifier.jsx';
import { useContext } from 'react';
import { AppContext } from 'contexts/app-context.jsx';
 
// COMPONENT
const Page = () => {

  // RENDER
  return (
    <div className="page">
      <Leader />
      {/* <Goal /> */}
      {/* <Adder /> */}
      {/* <Notifier />  */}
    </div>
  );

};

// EXPORTS
export default Page;
