import { PaginationProps } from 'types/pagination';
import usePagination from '../../../hooks/usePagination';
import * as Styled from './style';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';

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
        <Styled.Pagination>
          {/* <Styled.LeftArrowButton
            white={white}
            onClick={handlePrevPageGroupClick}
            disabled={currentPage === 1}
          /> */}
          <div
            white={white}
            onClick={handlePrevPageGroupClick}
            disabled={currentPage === 1}
          >
            <SlArrowLeft size="15" />
          </div>
          <Styled.PaginationButtonWrapper white={white}>
            {paginationButtons}
          </Styled.PaginationButtonWrapper>
          {/* <Styled.RightArrowButton
            white={white}
            onClick={handleNextPageGroupClick}
            disabled={currentPage === totalGroups}
          /> */}
          <div
            white={white}
            onClick={handlePrevPageGroupClick}
            disabled={currentPage === 1}
          >
            <SlArrowRight size="15" />
          </div>
        </Styled.Pagination>
      }
    </>
  );
};

export default Pagination;
