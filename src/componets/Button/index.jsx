import React from 'react';

function index({ children, onClick, className, disabled }) {
  return (
    <>
      <button disabled={disabled} className={className} onClick={() => onClick()}>
        {children}
      </button>
    </>
  );
}

export default index;
