import React from 'react';
import Editor from '@monaco-editor/react';

export const New: React.FC = () => {
  return (
    <div className="editor">
      <Editor theme="dark" />
      <div className="status">status</div>
    </div>
  );
};
