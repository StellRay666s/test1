import React from 'react';
import style from './index.module.scss';

function Input({ value, setValue, placeholder }) {
  function disptachValue(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <input
        className={style.input}
        value={value}
        onChange={(e) => disptachValue(e)}
        placeholder={placeholder}
        type="text"
      />
    </>
  );
}

export default Input;
