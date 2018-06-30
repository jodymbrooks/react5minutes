import React from 'react';

export default function TestComponent({ headline, count, showCount }) {
  return (
    <div>
      <h1>{headline}</h1>
      {showCount ? <p>{count}</p> : null}
    </div>
  );
}
