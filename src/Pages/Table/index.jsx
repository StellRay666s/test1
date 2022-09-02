import React from 'react';
import style from './index.module.scss';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';

function Table({ short, target, counter }) {
  const [url, setUrl] = React.useState();

  function getPage(value) {
    const response = axios.get(`/api/s/${value}`, {
      maxRedirects: 0,
    });
    response.then((res) => setUrl(res.request.responseURL));
  }

  return (
    <>
      <div className={style.table}>
        <a href={url} onClick={() => getPage(short)} className={style.column}>
          {short}
        </a>
        <div className={style.target}>{target}</div>
        <div className={style.counter}>{counter}</div>
      </div>
    </>
  );
}

export default Table;
