import * as S from './style';
import { IoSearch } from 'react-icons/io5';

const SearchBar = (props: any) => {
  const handleLoadSearch = async (e: any) => {
    if (e.key === 'Enter') {
      props.setInputValue(e.target.value);
    }
  };

  return (
    <S.Searchbar>
      <S.SearchbarInput
        type="text"
        onChange={e => {
          props.setInputValue(e.target.value);
        }}
        value={props.inputValue}
        onKeyDown={handleLoadSearch}
      />
      <S.SearchIcon>
        <IoSearch size="17" color="#3d3d3d" />
      </S.SearchIcon>
    </S.Searchbar>
  );
};

export default SearchBar;
