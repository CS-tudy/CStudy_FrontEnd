import * as S from './style';

interface SelectProps {
  name: string;
  handleActive: (e: React.MouseEvent) => void;
  isActive: boolean;
  options: string[];
  optionsValue: (string | number)[];
  selectedIndex: number[];
}

const Select = () =>
  //     {
  //   name,
  //   handleActive,
  //   isActive,
  //   options,
  //   optionsValue,
  //   selectedIndex,
  // }: SelectProps
  {
    return (
      <S.SelectBox
        // onClick={handleActive}
        // className={isActive ? 'active' : ''}
        // role="listbox"
        // aria-labelledby="셀렉트"
        // aria-expanded={isActive}
        tabIndex={0}
      >
        <S.Button>
          {/* {name} */}
          필터
          <span className="arrow" />
        </S.Button>
        <S.OptionList className="optionList">
          {/* {options?.map((option, index) => ( */}
          <S.OptionItem
          //   key={index}
          //   data-value={optionsValue[index]}
          //   role="option"
          //   aria-selected={index === selectedIndex[index]}
          >
            {/* {option} */}
            자바
          </S.OptionItem>
          {/* ))} */}
        </S.OptionList>
      </S.SelectBox>
    );
  };

export default Select;
