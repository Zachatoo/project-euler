import React, { useState, useEffect } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import axios from 'axios';

import { LoadingIcon } from '../../components';
import { axiosOptions } from '../../constants';

export const CodeRunner = ({ problemNumber }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [result, setResult] = useState();
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setIsResultVisible(false);
  }, [problemNumber]);
  
  const _close = () => {
    setIsResultVisible(false);
  }
  useEffect(_close, [problemNumber]);

  const _clear = () => {
    setResult(null);
  }

  const _runCode = async () => {
    setIsLoading(true);
    try {
      const res = await axios({...axiosOptions, url: `/problems/${problemNumber}`});
      setResult(res.data);
      setErrors(false);
      setIsLoading(false);
      setIsResultVisible(true);
    } catch {
      setErrors(true);
      setIsLoading(false);
      setIsResultVisible(true);
    }
  }

  return (
    <div className={`flex mb-1 ${isResultVisible ? "justify-between" : "justify-end"}`}>
      <Collapse in={isResultVisible} onExited={_clear}>
        <div className="flex bg-gray-200 w-full rounded-md px-2">
          <span className="my-auto">{!errors ? `Result: ${result}` : 'Failed to reach server.'}</span>
        </div>
      </Collapse>
      <>
        {result && (
          <Button
            variant="secondary"
            className="ml-1"
            onClick={_close}
          >
            Clear
          </Button>
        )}
        <Button
          variant="primary"
          className="ml-1"
          onClick={_runCode}
        >
          <span className="flex items-center">
            Run
            {isLoading && (
              <LoadingIcon className="ml-2" />
            )}
          </span>
        </Button>
      </>
    </div>
  );
}

export default CodeRunner;