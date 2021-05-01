import React, { useEffect, useState } from 'react';

import { Header, CodeSnippet, CodeRunner, ProjectDescription, Sidebar } from '../../components';
import { useMountEffect, useScroll } from '../../hooks';
import { problems } from '../../constants';

const DEFAULT_PROBLEM_COUNT = {
  completedProblems: 0,
  totalProblems: 100,
};

const ProjectEuler = () => {
  const { direction } = useScroll();
  const [problemCount, setProblemCount] = useState(DEFAULT_PROBLEM_COUNT);
  const [visibleProblem, setVisibleProblem] =
    useState(problems[
      sessionStorage.getItem('currentProblem') - 1 || 0
    ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);

  useMountEffect(() => {
    let tempProblemCount = {...problemCount};
    let completed = 0;
    problems.forEach(problem => {
      if (problem.completed)
        completed++;
    });
    tempProblemCount.completedProblems = completed;
    setProblemCount(tempProblemCount);
  });

  useEffect(() => {
    setIsSidebarOpen(false);
    if (visibleProblem)
      sessionStorage.setItem('currentProblem', visibleProblem.key);
    else
      sessionStorage.removeItem('currentProblem');
  }, [visibleProblem]);

  useEffect(() => {
    setIsHeaderShrunk(direction === 'down');
  }, [direction]);

  const _toggleSidebar = state => {
    setIsSidebarOpen(state ?? !isSidebarOpen);
  }

  const _selectProblem = problem => {
    setVisibleProblem(problem);
    _toggleSidebar(false);
  }

  return (
    <>
      <Sidebar
        open={isSidebarOpen}
        select={_selectProblem}
        toggle={_toggleSidebar}
      />
      <Header
        isHeaderShrunk={isHeaderShrunk}
        problemCount={problemCount}
        toggleSidebar={_toggleSidebar}
      />
      <div className="max-w-4xl mt-14 mb-4 mx-auto py-4 px-2">
        {visibleProblem ? (
          <>
            <div className="text-center text-2xl pb-2">
              <span>Problem {visibleProblem.key}: </span>
              <span>{visibleProblem.title}</span>
              {!visibleProblem.completed && (
                <span> (WIP)</span>
              )}
            </div>
            {visibleProblem.prompt}
            {!!visibleProblem.codeStringified && (
              <div className="max-w-3xl mx-auto mb-2">
                <CodeSnippet>
                  {visibleProblem.codeStringified}
                </CodeSnippet>
                {visibleProblem.completed && (
                  <CodeRunner problemNumber={visibleProblem.key} />
                )}
              </div>
            )}
            {visibleProblem.helperFunctions?.length > 0 && (
              <>
                {visibleProblem.helperFunctions.length > 1 ? (
                  <span>The following helper functions were used for this solution:</span>
                ) : (
                  <span>The following helper function was used for this solution:</span>
                )}
                {visibleProblem.helperFunctions.map((fn, index) => (
                  <div key={index} className="max-w-3xl mx-auto my-2">
                    <CodeSnippet>
                      {fn}
                    </CodeSnippet>
                  </div>
                ))}
              </>
            )}
          </>
        ) : (
          <ProjectDescription />
        )}
      </div>
    </>
  );
}

export default ProjectEuler;