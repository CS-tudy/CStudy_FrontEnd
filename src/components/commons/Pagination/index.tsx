import { PaginationProps } from 'types/pagination';
import usePagination from '../../../hooks/usePagination';
import * as Styled from './style';

const Pagination = ({
  totalPages,
  handlePage,
  page,
  white,
}: PaginationProps) => {
  console.log(page);

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
        <Styled.Pagination>
          <Styled.LeftArrowButton
            white={white}
            onClick={handlePrevPageGroupClick}
            disabled={currentPage === 1}
          />
          <Styled.PaginationButtonWrapper white={white}>
            {paginationButtons}
          </Styled.PaginationButtonWrapper>
          <Styled.RightArrowButton
            white={white}
            onClick={handleNextPageGroupClick}
            disabled={currentPage === totalGroups}
          />
        </Styled.Pagination>
      }
    </>
  );
};

export default Pagination;
