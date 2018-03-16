import React from 'react';
import { push } from 'react-router-redux';
// import { CardList } from '../../';
import CardListSubjectsContainer from '../../../containers/CardListSubjectsContainer';

/*const list = {
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
  <CardList list={list} newElement={() => alert('New User')} modifyElement={ (id) => alert(`Modify ${id}`) } deleteElement={ (id) => alert(`Delete ${id}`) } />
);*/

export const Home = () => (
  <CardListSubjectsContainer />
);
