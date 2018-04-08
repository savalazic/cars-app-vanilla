// @flow
import 'normalize.css';
import { getCars } from './api/carApi';
import render from './util/render';
import App from './app';
import './index.css';

const state = { searchTerm: '' };

const setSearchTerm = (searchTerm: string) => {
  state.searchTerm = searchTerm;
};

const updateCards = () => {
  const cardNode = document.querySelectorAll('.card-wrapper');
  [...cardNode].forEach(card => {
    if (
      card
        .querySelector('.card-title')
        .textContent.toLowerCase()
        .includes(state.searchTerm.toLowerCase())
    ) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
};

const onSearchChange = (e: HTMLInputElement) => {
  setSearchTerm(e.target.value);
  updateCards();
};

getCars().then(data => {
  state.data = data;
  const app = App(data, onSearchChange);

  render(app, '#app');
});
