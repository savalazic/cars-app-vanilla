// @flow
import 'normalize.css';
import { getCars } from './api/carApi';
import CardList from './components/CardList';
import render from './util/render';

import './index.css';

const state = {};

getCars().then(data => {
  state.cars = data;
  const cardList = CardList(state.cars);

  render(cardList, '#app');
});
