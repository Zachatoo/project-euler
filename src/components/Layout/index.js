import React, { useContext } from 'react';

import { AppContext } from '../../hoc/AppContext/AppContext'
import Header from '../Header';
import Sidebar from '../Sidebar';

export const Layout = ({ children }) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  return (
    <div className="bg-gray-50 min-h-screen min-w-screen overflow-hidden">
      <Header />
      <main>
        { children }
      </main>
    </div>
  );
}

export default Layout;