import React, { useState, useEffect, useContext } from 'react';

import { Overlay } from '../Overlay';
import problems from '../../constants/problems';

export const Sidebar = ({ open, select, toggle }) => {

  return (
    <>
      <div
        className={
          `fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0bg-white border-r-2 bg-gray-100 pt-2
          lg:translate-x-0 lg:static lg:inset-0 ${open ? "ease-out translate-x-0" : "ease-in -translate-x-full"}`}
      >
        {problems?.map(problem => (
          <div
            key={problem.key}
            className="cursor-pointer py-2 pl-2 hover:bg-gray-200"
            onClick={() => select(problem)}
          >
            <span>{problem.key}: {problem.title}</span>
          </div>
        ))}
      </div>
      {open &&
        <Overlay setOverlayVisible={toggle} />}
    </>
  );
}

export default Sidebar;