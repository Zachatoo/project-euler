import React from 'react';

export const CodeSnippet = ({ children }) => {
  return (
    <div className="bg-gray-300 rounded-lg">
      <code className="flex whitespace-pre overflow-x-auto text-black mx-3 py-2">
        { children }
      </code>
    </div>
  );
}

export default CodeSnippet;