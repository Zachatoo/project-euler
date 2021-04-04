import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import axios from 'axios';

import { LoadingIcon } from '../../components';
import { axiosOptions } from '../../constants';

export const CodeRunner = ({ problemNumber }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [result, setResult] = useState();
  const [executionTime, setExecutionTime] = useState();

  useEffect(() => {
    setIsLoading(false);
    setIsResultVisible(false);
  }, [problemNumber]);

  const _runCode = async () => {
    setIsLoading(true);
    setIsResultVisible(false);
    const res = await axios({...axiosOptions, url: `/problems/${problemNumber}`});
    setResult(res.data);
    setIsLoading(false);
    setIsResultVisible(true);
  }
  
  const _clear = () => {
    setResult(null);
    setIsResultVisible(false);
  }
  useEffect(_clear, [problemNumber]);

  return (
    <>
      <div className={`flex mb-1 ${isResultVisible ? "justify-between" : "justify-end"}`}>
        {isResultVisible &&
        <div className="flex bg-gray-200 w-full rounded-md px-2">
          {/* <span className="my-auto">{result ? `Success! Execution time: ${executionTime}ms` : 'Failed! Check your code and try again.'}</span> */}
          <span className="my-auto">{result ? 'Success!' : 'Failed! Check your code and try again.'}</span>
        </div>}
        <>
          {result &&
          <Button
            variant="secondary"
            className="ml-1"
            onClick={_clear}
          >
            Clear
          </Button>}
          <Button
            variant="primary"
            className="ml-1"
            onClick={_runCode}
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