'use client';

// IMPORTS
import 'styles/main.scss';
import { AppProvider } from 'contexts/app-context.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

// METADATE
// const metadata = {
//   title: 'Pushup Tracker',
//   description: 'A challenge between Jérôme, Johannes and Elias',
// };

// COMPONENT
const Layout = ({ children }) => {

  // CREATE QUERY CLIENT
  const queryClient = new QueryClient();
  
  // RNDER
  return (
    <html lang="en">
        <QueryClientProvider client={ queryClient }>
          <AppProvider>
            <body>{children}</body>
          </AppProvider>
        </QueryClientProvider>
    </html>
  );

};

// EXPORTS
// export { metadata };
export default Layout;

