// @flow
import CardList from './components/CardList';
import SearchInput from './components/SearchInput';

const App = (data: *, onSearchChange: () => void) => {
  const cardList = CardList(data.cars);
  const searchInput = SearchInput(onSearchChange);

  const content = `
    <div>
      ${searchInput}
      ${cardList}
    </div>
  `;

  return content;
};

export default App;
