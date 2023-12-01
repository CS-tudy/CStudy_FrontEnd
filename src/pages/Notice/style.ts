import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 12rem;
  width: 100%;
  height: 100%;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const PaginationWrapper = styled.div`
  padding: 4rem 0 6rem;
`;
