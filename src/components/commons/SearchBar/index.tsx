import * as S from './style';
import { GoSearch } from 'react-icons/go';

const SearchBar = (props: any) => {
  const handleLoadSearch = async (e: any) => {
    if (e.key === 'Enter') {
      // useGetProblemList({ questionTitle: inputValue });
      // const res = await getProblemListSearch(e.target.value);
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
        <GoSearch size="18" />
      </S.SearchIcon>
    </S.Searchbar>
  );
};

export default SearchBar;
