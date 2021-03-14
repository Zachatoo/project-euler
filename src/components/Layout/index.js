import React, { useContext } from 'react';

import { AppContext } from '../../hoc/AppContext/AppContext'

export const Layout = ({ children }) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  return (
    <div className="bg-gray-50 min-h-screen min-w-screen overflow-hidden">
      <main>
        { children }
      </main>
    </div>
  );
}

export default Layout;