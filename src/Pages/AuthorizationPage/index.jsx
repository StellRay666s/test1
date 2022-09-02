import React from 'react';
import style from './index.module.scss';
import Input from '../../componets/Input';
import Button from '../../componets/Button';
import axios from 'axios';
import { setUser } from '../../Redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es';
import { axiosClient } from '../../axios';

function AutorizationPage() {
  const [username, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isAuth } = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function authorization() {
    try {
      const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);
      const response = await axios.post('/api/login', params, {});
      dispatch(setUser());
      console.log(response);
      const access_token = response.data.access_token;
      localStorage.setItem('access_token', access_token);
      navigate('/');
      console.log(access_token);
    } catch (err) {
      alert('Ошибка при авторизации');
    }
  }

  return (
    <div className={style.wrapper}>
      <h1>Авторизация</h1>
      <div className={style.input_wrapper}>
        <Input placeholder="Имя" value={username} setValue={setName} />
        <Input placeholder="Пароль" value={password} setValue={setPassword} />
        <Button onClick={() => authorization()} className={'buttonReg'}>
          Авторизироваться
        </Button>
        <div>
          Нету аккаунта?<Link to={'/registration'}>Зарегистрируйся</Link>
        </div>
      </div>{' '}
    </div>
  );
}

export default AutorizationPage;
