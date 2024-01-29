import * as S from './style';
import { GoSearch } from 'react-icons/go';
import { FieldValues, useForm } from 'react-hook-form';
import { memo } from 'react';

interface SearchbarProps {
  onSubmit: (formData: FieldValues) => void;
}

const Searchbar = ({ onSubmit }: SearchbarProps) => {
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      searchInput: '',
    },
  });

  const handleNoticeEnterKey = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <S.Searchbar>
      <S.SearchInput
        type="text"
        {...register('searchInput', {
          required: '검색어를 입력해주세요.',
        })}
        onKeyDown={handleNoticeEnterKey}
      />
      <S.SearchIcon>
        <button
          id="search-button"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          <GoSearch size="18" />
        </button>
      </S.SearchIcon>
    </S.Searchbar>
  );
};

export default memo(Searchbar);
