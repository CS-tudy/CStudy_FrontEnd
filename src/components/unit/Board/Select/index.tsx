import * as S from './style';
import { RxTriangleDown } from 'react-icons/rx';
import { memo, useState } from 'react';

interface SelectOptionsProps {
  OptionValue: string;
  Category: string;
  OptionChange: any;
}

const SelectOptions = ({
  OptionValue,
  Category,
  OptionChange,
}: SelectOptionsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleList = () => {
    setIsOpen(prevState => !prevState);
  };

  const options = [
    { label: '제목', value: 'title' },
    { label: '내용', value: 'content' },
  ];
  return (
    <S.Select onClick={handleToggleList} className={isOpen ? 'active' : ''}>
      <S.OptionList
        aria-valuetext={OptionValue}
        onClick={OptionChange}
        className="optionList"
      >
        {options.map(option => (
          <S.OptionItem
            key={option.value}
            value={option.value}
            selected={OptionValue === option.value}
          >
            {option.label}
          </S.OptionItem>
        ))}
      </S.OptionList>
      <S.Button>
        {Category}
        <span className="arrow">
          <RxTriangleDown size={20} />
        </span>
      </S.Button>
    </S.Select>
  );
};

export default memo(SelectOptions);
