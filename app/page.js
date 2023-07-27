// IMPORT 
import Adder from 'components/adder/adder.jsx';
import Leader from 'components/leader/leader.jsx';
import Goal from 'components/goal/goal.jsx';
 
// COMPONENT
const Page = () => {

  // RENDER
  return (
    <div className="page">
      <Leader />
      <Goal />
      <Adder />
    </div>
  );

};

// EXPORTS
export default Page;
