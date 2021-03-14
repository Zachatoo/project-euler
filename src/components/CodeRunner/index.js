import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';

import { LoadingIcon } from '../../components';

export const CodeRunner = ({ code }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [result, setResult] = useState();

  const runCode = () => {
    setIsLoading(true);
    setIsResultVisible(false);
    const result = code.call()?.toString();
    setResult(result);
    setIsResultVisible(true);
    setIsLoading(false);
  }
  
  const clear = () => {
    setResult(null);
    setIsResultVisible(false);
  }
  useEffect(clear, [code]);

  return (
    <>
      <div className={`flex mb-1 ${isResultVisible ? "justify-between" : "justify-end"}`}>
        {isResultVisible &&
        <div className="flex bg-gray-200 w-full rounded-md px-2 mr-1">
          <span className="my-auto">{result ? 'Success! Result Below:' : 'Failed! Check your code and try again.'}</span>
        </div>}
        <>
          {result
          ? <Button
            variant="secondary"
            onClick={clear}
          >
            Clear
          </Button>
          : <Button
            variant="primary"
            onClick={runCode}
          >
            Run {isLoading && <LoadingIcon />}
          </Button>}
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