import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { AppContext } from '../../hoc/AppContext/AppContext'
import { CodeSnippet, CodeRunner, LoadingIcon } from '../../components';
import { problems } from '../../constants';

const ProjectEuler = (props) => {
  const [globalState, setGlobalState] = useContext(AppContext);
  const [visibleProblem, setVisibleProblem] = useState(problems[0]);

  return (
      <div className="max-w-4xl mt-20 mx-auto p-4">
        {visibleProblem ?
        <>
          <div className="text-center text-2xl pb-2">
            <span>Problem {visibleProblem.key}: </span>
            <span>{visibleProblem.title}</span>
          </div>
          {visibleProblem.prompt}
          {!!visibleProblem.code &&
          <div className="max-w-3xl mx-auto mb-1">
            <CodeSnippet>
              {`${visibleProblem.codeStringified || visibleProblem.code?.toString()}`}
            </CodeSnippet>
            <CodeRunner code={visibleProblem.code} />
          </div>}
        </>
        : <div>
          Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve.
          Although mathematics will help you arrive at elegant and efficient methods,
          the use of a computer and programming skills will be required to solve most problems.
        </div>}
      </div>
  );
}

export default ProjectEuler;