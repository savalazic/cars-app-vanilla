// @flow
import Card from '../Card';
import type { Car, Data } from '../../types';

import './CardList.css';

const CardList = (data: Data) => {
  let content = (data.cars || []).reduce((body, car: Car) => {
    const contentBody = `
      ${body}
      ${Card(car)}
    `;

    return contentBody;
  }, '');

  content = `<div class="card-list">${content}</div>`;
  return content;
};

export default CardList;
