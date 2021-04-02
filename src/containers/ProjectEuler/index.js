import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Header, CodeSnippet, CodeRunner, Sidebar } from '../../components';
import { problems, axiosOptions } from '../../constants';

const DEFAULT_PROBLEM_COUNT = {
  completedProblems: 0,
  totalProblems: 100,
};

const ProjectEuler = (props) => {
  const [problemCount, setProblemCount] = useState(DEFAULT_PROBLEM_COUNT);
  const [visibleProblem, setVisibleProblem] =
    useState(problems[
      sessionStorage.getItem('currentProblem') - 1 || 0
    ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let tempProblemCount = {...problemCount};
    let completed = 0;
    problems.forEach(problem => {
      if (problem.completed)
        completed++;
    });
    tempProblemCount.completedProblems = completed;
    setProblemCount(tempProblemCount);
  }, []);

  useEffect(() => {
    toggleSidebar(false);
    if (visibleProblem)
      sessionStorage.setItem('currentProblem', visibleProblem.key);
    else
      sessionStorage.removeItem('currentProblem');
  }, [visibleProblem]);

  const runCode = () => {
    axios({...axiosOptions, url: `/problems/${visibleProblem.key}`}).then(res => {
      console.log(res);
    });
  }

  const toggleSidebar = (state) => {
    setIsSidebarOpen(state ?? !isSidebarOpen);
  }

  const selectProblem = (problem) => {
    setVisibleProblem(problem);
    toggleSidebar(false);
  }

  return (
    <>
      <Sidebar
        open={isSidebarOpen}
        select={selectProblem}
        toggle={toggleSidebar}
      />
      <Header toggleSidebar={toggleSidebar} problemCount={problemCount} />
      <div className="max-w-4xl mt-20 mx-auto p-4">
        {visibleProblem ?
        <>
          <div className="text-center text-2xl pb-2">
            <span>Problem {visibleProblem.key}: </span>
            <span>{visibleProblem.title}</span>
            {!visibleProblem.completed && (
              <span> (WIP)</span>
            )}
          </div>
          {visibleProblem.prompt}
          {!!visibleProblem.code &&
          <div className="max-w-3xl mx-auto mb-1">
            <CodeSnippet>
              {`${visibleProblem.codeStringified || visibleProblem.code?.toString()}`}
            </CodeSnippet>
            <CodeRunner code={visibleProblem.code} runCode={runCode} />
          </div>}
        </>
        : <div>
          Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve.
          Although mathematics will help you arrive at elegant and efficient methods,
          the use of a computer and programming skills will be required to solve most problems.
        </div>}
      </div>
    </>
  );
}

export default ProjectEuler;