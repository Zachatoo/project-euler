import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';

import { LoadingIcon } from '../../components';

export const CodeRunner = ({ code, runCode }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [isResultVisible, setIsResultVisible] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(true);
  const [result, setResult] = useState();
  const [executionTime, setExecutionTime] = useState();

  // const runCode = () => {
  //   setIsLoading(true);
  //   setIsResultVisible(false);
  //   let promise = new Promise((resolve, reject) => {
  //     const startTime = performance.now();
  //     const result = code.call()?.toString();
  //     const endTime = performance.now();
  //     setExecutionTime(endTime - startTime);
  //     if (result) resolve(result);
  //     else reject();
  //   });

  //   promise.then(res => {
  //     setResult(res);
  //   }).finally(() => {
  //     setIsResultVisible(true);
  //     setIsLoading(false);
  //   });
  // }
  
  const clear = () => {
    setResult(null);
    setIsResultVisible(false);
  }
  useEffect(clear, [code]);

  return (
    <>
      <div className={`flex mb-1 ${isResultVisible ? "justify-between" : "justify-end"}`}>
        {isResultVisible &&
        <div className="flex bg-gray-200 w-full rounded-md px-2">
          <span className="my-auto">{result ? `Success! Execution time: ${executionTime}ms` : 'Failed! Check your code and try again.'}</span>
        </div>}
        <>
          {result &&
          <Button
            variant="secondary"
            className="ml-1"
            onClick={clear}
          >
            Clear
          </Button>}
          <Button
            variant="primary"
            className="ml-1"
            onClick={runCode}
          >
            Run {isLoading && <LoadingIcon />}
          </Button>
        </>
      </div>
      <Collapse in={isResultVisible && !!result}>
        <div className="bg-gray-300 w-full rounded-md px-2">
          {result}
        </div>
      </Collapse>
    </>
  );
}

export default CodeRunner;