import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = ({ toggleSidebar, problemCount, isHeaderShrunk }) => {
  return (
    <>
      <div className="fixed w-full top-0 pt-2 pb-1 text-gray-700 bg-blue-300">
        <button
          className="fixed ml-1 p-1"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon="bars" className="text-lg" />
        </button>
        <div className={`${isHeaderShrunk ? 'text-xl' : 'text-2xl'} text-center font-bold leading-8 md:pb-2 md:text-3xl`}>
          Project Euler
        </div>
        {!isHeaderShrunk && (
          <div className="mx-4">
            <div className="flex flex-wrap max-w-3xl m-auto mt-1 flex justify-between text-sm text-center md:-mt-2">
              <div className="mt-2 flex items-center">
                <FontAwesomeIcon icon="address-card" />
                <span className="text-gray-600 pl-2">Zachary Young</span>
              </div>
              <div className="mt-2 flex items-center">
                <FontAwesomeIcon icon="check" />
                <span className="text-gray-600 pl-2">{problemCount.completedProblems} out of {problemCount.totalProblems}</span>
              </div>
              <div className="hidden xs:flex mt-2 flex items-center">
                <FontAwesomeIcon icon="calendar-alt" />
                <span className="text-gray-600 pl-2">Started on March 7, 2021</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;