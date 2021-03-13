import React from 'react';

const CodeSnippet = ({ children }) => {
  return (
    <div className="max-w-3xl justify-center w-full bg-gray-300 rounded-lg m-auto my-4">
      <code className="flex flex-wrap whitespace-pre-wrap bg-gray-300 rounded-lg m-auto px-4 py-2">
        { children }
      </code>
    </div>
  );
}

export default CodeSnippet;