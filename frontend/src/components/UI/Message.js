import React from 'react';

const UIMessage = (type, content, header) => {
  let className = ' ';
  if (type === 'error') {
    className = 'is-danger';
  }
  return (
    <article className={`message ${className}`}>
      <div className="message-header">
        {{ header }}
      </div>
      <div className="message-body content help">
        {{ content }}
      </div>
    </article>
  );
};
export default UIMessage;
