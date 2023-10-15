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
    <input
      type="text"
      style={{ border: '1px solid gray' }}
      placeholder="검색어를 입력해 주세요."
      onChange={e => {
        props.setInputValue(e.target.value);
      }}
      value={props.inputValue}
      onKeyDown={handleLoadSearch}
    />
  );
};

export default SearchBar;
