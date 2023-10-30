import { PaginationProps } from 'types/pagination';
import usePagination from '../../../hooks/usePagination';
import * as S from './style';

const Pagination = ({
  totalPages,
  handlePage,
  page,
  white,
}: PaginationProps) => {
  const {
    currentPage,
    handlePrevPageGroupClick,
    handleNextPageGroupClick,
    paginationButtons,
    totalGroups,
  } = usePagination({
    totalPages,
    handlePage,
    page,
  });

  return (
    <>
      {
        //   totalPages > 1 &&
        <S.Pagination>
          <S.LeftArrowButton
            white={white}
            onClick={handlePrevPageGroupClick}
            disabled={currentPage === 1}
          />
          <S.PaginationButtonWrapper white={white}>
            {paginationButtons}
          </S.PaginationButtonWrapper>
          <S.RightArrowButton
            white={white}
            onClick={handleNextPageGroupClick}
            disabled={currentPage === totalGroups}
          />
        </S.Pagination>
      }
    </>
  );
};

export default Pagination;
