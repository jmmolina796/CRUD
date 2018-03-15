import React from 'react';
import { push } from 'react-router-redux';
import { CardList } from '../../';

const list = {
  15: {
    id: 15,
    name: 'as',
    telephone: '123',
    profession: 'prof',
    user_name: 'user',
    password: 'pass',
  },
  16: {
    id: 16,
    name: 'as',
    telephone: '123',
    profession: 'prof',
    user_name: 'user',
    password: 'pass',
  },
  17: {
    id: 17,
    name: 'as',
    telephone: '123',
    profession: 'prof',
    user_name: 'user',
    password: 'pass',
  },
};

export const Home = () => (
  <CardList list={list} />
);
