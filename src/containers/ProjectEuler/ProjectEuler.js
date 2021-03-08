import React, { useContext } from 'react';

import { AppContext } from '../../hoc/AppContext/AppContext'

const ProjectEuler = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);
  return (
    <div>
      Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve.
      Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems.
    </div>
  );
}

export default ProjectEuler;