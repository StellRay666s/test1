import React from 'react';
import style from './index.module.scss';
import Input from '../../componets/Input';
import Button from '../../componets/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../../axios';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  const [username, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  async function registration() {
    try {
      const response = await axios.post('/api/register', null, {
        params: {
          username: username,
          password: password,
        },
      });
      navigate('/authorization');
    } catch (err) {
      alert('Ошибка при регистрации');
    }
  }
  return (
    <>
      <div className={style.wrapper}>
        <h1>Регистрация</h1>
        <div className={style.input_wrapper}>
          <Input placeholder="Имя" value={username} setValue={setName} />
          <Input placeholder="Пароль" value={password} setValue={setPassword} />
          <Button onClick={() => registration()} className={'buttonReg'}>
            Зарегистрироваться
          </Button>
          <div>
            Есть аккаунта?<Link to={'/authorization'}>авторизуйся</Link>
          </div>
        </div>{' '}
      </div>
    </>
  );
}

export default RegistrationPage;
