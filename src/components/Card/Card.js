// @flow
import { type Car } from '../../types';

import './Card.css';

const Card = (card: Car) => {
  const content = `
    <div class="card" style="background-image: url(${card.image})">
      <div>${card.name}</div>
    </div>
  `;
  return content;
};

export default Card;
