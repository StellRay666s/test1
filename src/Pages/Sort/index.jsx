import React from 'react';
import style from './index.module.scss';

function Sort({ sort, setSort }) {
  const listSort = ['Просмотры по возрастанию', 'Просмотры по убыванию'];

  return (
    <div className={style.wrapper}>
      {listSort.map((item, index) => (
        <div
          key={index}
          onClick={() => setSort(index)}
          className={sort === index ? style.link_active : style.link}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Sort;
