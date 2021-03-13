import React, { useContext } from 'react';

import { AppContext } from '../../hoc/AppContext/AppContext'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Layout = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  return (
    <div className="fixed bg-gray-50 h-screen w-screen">
      <Header />
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;