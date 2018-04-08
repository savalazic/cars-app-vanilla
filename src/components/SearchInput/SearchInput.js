// @flow
import { getCars } from '../../api/carApi';

import './SearchInput.css';

const SearchInput = (onChange: () => void) => {
  const content = `
    <div class="search">
      <input
        type="text"
        placeholder="Search cars.."
      />
    </div>
  `;

  getCars().then(() => {
    document.querySelector('.search input').addEventListener('keyup', onChange);
  });

  return content;
};

export default SearchInput;
