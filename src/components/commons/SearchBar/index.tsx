import * as S from './style';
import { HiOutlineSearch } from 'react-icons/hi';

const SearchBar = (props: any) => {
  const handleLoadSearch = async (e: any) => {
    if (e.key === 'Enter') {
      // useList({ questionTitle: inputValue });
      // const res = await ListSearch(e.target.value);
      console.log(e.target.value);
      // setProblemList(res.data);
      // console.log('res', res);
      // setProblemList(res.data);
      props.setInputValue(e.target.value);
    }
    // setInputValue('');
  };

  return (
    // <input
    //   type="text"
    //   style={{ border: '1px solid gray' }}
    //   placeholder="제목을 입력해주세요."
    //   onChange={e => {
    //     props.setInputValue(e.target.value);
    //   }}
    //   value={props.inputValue}
    //   onKeyDown={handleLoadSearch}
    // />
    <S.Searchbar>
      <S.SearchbarInput
        type="text"
        // style={{ border: '1px solid gray' }}
        placeholder="제목을 입력해주세요."
        onChange={e => {
          props.setInputValue(e.target.value);
        }}
        value={props.inputValue}
        onKeyDown={handleLoadSearch}
      />
      <S.SearchIcon>
        <HiOutlineSearch size="17" color="#3d3d3d" />
      </S.SearchIcon>
    </S.Searchbar>
  );
};

export default SearchBar;
