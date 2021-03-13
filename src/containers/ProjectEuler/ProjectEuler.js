import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../hoc/AppContext/AppContext'
import Problems from '../../components/Problems/Problems';
import CodeSnippet from '../../components/CodeSnippet/CodeSnippet';

const ProjectEuler = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);
  const [visibleProblem, setVisibleProblem] = useState(Problems[0]);
  
  return (
      <div className="max-w-4xl mt-20 m-auto p-4">
        <div>
          Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve.
          Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems.
        </div>
        {visibleProblem &&
        <>
          <div className="text-center text-3xl">
            <span className="text-3xl">Problem {visibleProblem.key}</span><br />
            <span className="text-2xl">{visibleProblem.title}</span>
          </div>
          {visibleProblem.prompt}
          {!!visibleProblem.code &&
          <CodeSnippet>
            {`${visibleProblem.code.toString()}`}
          </CodeSnippet>}
        </>}
      </div>
  );
}

export default ProjectEuler;