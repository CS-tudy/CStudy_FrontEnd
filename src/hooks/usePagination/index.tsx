import React, { useState, useCallback, useMemo } from 'react';
import * as S from './style';
import { PaginationProps } from 'types/pagination';

const usePagination = ({ totalPages, handlePage, page }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pagesPerGroup = 5;
  const totalGroups = Math.ceil(totalPages / pagesPerGroup);
  const currentPageNumber = page + 1;

  const handlePrevPageGroupClick = useCallback(() => {
    setCurrentPage(prevPage => {
      console.log(prevPage);

      handlePage((prevPage - 1) * pagesPerGroup - 1);
      return prevPage - 1;
    });
  }, [handlePage]);

  const handleNextPageGroupClick = useCallback(() => {
    setCurrentPage(prevPage => {
      console.log(prevPage);
      handlePage(prevPage * pagesPerGroup);
      return prevPage + 1;
    });
  }, [handlePage]);

  const paginationButtons = useMemo(() => {
    const startIndex = (currentPage - 1) * pagesPerGroup;
    const endIndex = Math.min(startIndex + pagesPerGroup, totalPages);

    return Array.from({ length: endIndex - startIndex }, (_, index) => {
      const pageNumber = startIndex + index + 1;

      return (
        <S.PaginationButton
          key={index}
          onClick={() => handlePage(pageNumber - 1)}
          className={pageNumber === currentPageNumber ? 'active' : ''}
        >
          {pageNumber}
        </S.PaginationButton>
      );
    });
  }, [currentPage, currentPageNumber, handlePage, totalPages]);

  return {
    currentPage,
    totalGroups,
    handlePrevPageGroupClick,
    handleNextPageGroupClick,
    paginationButtons,
  };
};

export default usePagination;
