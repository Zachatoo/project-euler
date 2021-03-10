import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

import { AppContext } from '../../hoc/AppContext/AppContext';

const Header = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);

  return (
    <div className={styles.header}>
      <div className="flex-1 min-w-0">
        <Button
          className="pl-1"
        >
          <FontAwesomeIcon icon="bars" />
        </Button>
        <h2 className="text-center text-2xl font-bold leading-7 xs:text-3xl xs:truncate">
          Project Euler
        </h2>
        <div className="mx-4">
          <div className="flex flex-wrap max-w-3xl m-auto mt-1 flex justify-between text-sm text-gray-700 text-center xs:mt-0">
            <div className="mt-2 flex items-center">
              <FontAwesomeIcon icon="address-card" />
              <span className="pl-2">Zachary Young</span>
            </div>
            <div className="mt-2 flex items-center">
              <FontAwesomeIcon icon="check" />
              <span className="pl-2">{globalState.completedProblems} out of {globalState.totalProblems}</span>
            </div>
            <div className="mt-2 flex items-center">
              <FontAwesomeIcon icon="calendar-alt" />
              <span className="pl-2">Started on March 7, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;