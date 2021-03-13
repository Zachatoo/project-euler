import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

import { AppContext } from '../../hoc/AppContext/AppContext';

const Header = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  const toggleSidebar = () => {
    const tempGlobalState = {...globalState};
    const sidebarOpen = tempGlobalState.sidebarOpen;
    setGlobalState({...tempGlobalState, sidebarOpen: !sidebarOpen});
  }

  return (
    <div className="fixed w-full top-0 pt-2 pb-1 text-gray-700 bg-blue-300">
      {/* <button
        className="rounded-lg ml-1 mt-1 p-1 hover:bg-blue-400 focus:ring-0"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon="bars" className="text-xl" />
      </button> */}
      <h2 className="text-center text-2xl font-bold leading-8 xs:text-3xl">
        Project Euler
      </h2>
      <div className="mx-4">
        <div className="flex flex-wrap max-w-3xl m-auto mt-1 flex justify-between text-sm text-center xs:mt-0">
          <div className="mt-2 flex items-center">
            <FontAwesomeIcon icon="address-card" />
            <span className="text-gray-600 pl-2">Zachary Young</span>
          </div>
          <div className="mt-2 flex items-center">
            <FontAwesomeIcon icon="check" />
            <span className="text-gray-600 pl-2">{globalState.completedProblems} out of {globalState.totalProblems}</span>
          </div>
          <div className={`${styles.date} mt-2 flex items-center`}>
            <FontAwesomeIcon icon="calendar-alt" />
            <span className="text-gray-600 pl-2">Started on March 7, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;