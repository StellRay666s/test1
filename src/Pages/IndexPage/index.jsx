import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../componets/Input';

import Button from '../../componets/Button';
import style from './index.module.scss';
import Table from '../Table';
import Sort from '../Sort';
import { useSelector } from 'react-redux';

function IndexPage() {
  const [link, setLink] = React.useState();
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');
  const [data, setData] = React.useState([]);
  const [datas, setDatas] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [sort, setSort] = React.useState(0);

  function logout() {
    localStorage.setItem('access_token', '');
    navigate('/authorization');
  }

  //Сокращение ссылки

  async function urlSqueeze() {
    const response = await axios.post('/api/squeeze', null, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        link: link,
      },
    });
    setData(response.data);
  }

  //Получение списка ссылок
  React.useEffect(() => {
    (async function getData() {
      const response = await axios.get(
        `/api/statistics?order=${
          (sort == 0 && 'asc_counter') || (sort == 1 && 'desc_counter')
        }&offset=${offset}&limit=10`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      setDatas(response.data);
    })();
  }, [offset, sort]);

  //Проверка на авторизация
  React.useEffect(() => {
    if (token == null) {
      alert('Необходимо авторизоваться');
      navigate('/authorization');
    }
  }, [data]);

  return (
    <div className={style.wrapper}>
      <div className={style.auth_block}>
        <Link className={style.logout} onClick={() => logout()} to={'/authorization'}>
          Выйти
        </Link>
      </div>
      <div className={style.inp_btn}>
        <Input value={link} setValue={setLink} placeholder="Укажите ссылку" />
        <Button className={'buttonReg'} onClick={() => urlSqueeze()}>
          Сократить
        </Button>
        <Sort sort={sort} setSort={setSort} />
      </div>
      {datas.map((items) => (
        <Table key={items.id} short={items.short} target={items.target} counter={items.counter} />
      ))}
      <div className={style.button}>
        <Button
          disabled={offset === 0 ? true : false}
          onClick={() => setOffset(offset - 10)}
          className={'buttonReg'}>
          Назад
        </Button>
        <Button onClick={() => setOffset(offset + 10)} className={'buttonReg'}>
          Далее
        </Button>
      </div>
    </div>
  );
}

export default IndexPage;
