import React from 'react';

import { Overlay } from '../Overlay';
import { problems } from '../../constants';

export const Sidebar = ({ open, select, toggle }) => {
  return (
    <>
      <div
        className={
          `fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform border-r-2 bg-gray-100
          ${open ? "ease-out translate-x-0" : "ease-in -translate-x-full"}`}
      >
        <div
          className="cursor-pointer py-2 pl-4 hover:bg-gray-200"
          onClick={() => select()}
        >
          <span>Project Description</span>
        </div>
        {problems?.map(problem => (
          <div
            key={problem.key}
            className={`cursor-pointer py-2 pl-2 hover:bg-gray-200 ${!problem.completed && 'text-red-500'}`}
            onClick={() => select(problem)}
          >
            <span>{problem.key}. {problem.title}{!problem.completed && ' (WIP)'}</span>
          </div>
        ))}
      </div>
      {open &&
        <Overlay setOverlayVisible={toggle} />}
    </>
  );
}

export default Sidebar;