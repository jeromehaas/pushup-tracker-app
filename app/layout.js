// IMPORTS
import 'styles/main.scss';

// METADATE
const metadata = {
  title: 'Pushup Tracker',
  description: 'A challenge between Jérôme, Johannes and Elias',
};

// COMPONENT
const Layout = ({ children }) => {

  // RNDER
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );

};

// EXPORTS
export { metadata };
export default Layout;

