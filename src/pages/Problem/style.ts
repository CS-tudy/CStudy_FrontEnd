import { media } from 'constants/media';
import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 12rem;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  /* display: flex; */
  /* justify-content: flex-end; */
  position: absolute;
  right: 5vw;
  top: 95px;
  /* left: 20px; */
  /* padding-left: vw; */
  /* width: 100%; */
  /* padding-right: 5vw; */

  ${media.mobildL} {
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* flex-direction: row;
  justify-content: flex-end; */
  width: 100%;
  position: absolute;
  padding-right: 5vw;
  top: 0px;

  ${media.mobildL} {
    flex-direction: column;
    top: 0px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const FilterWrapper2 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 20px;
`;

export const QueryFilterWrapper = styled.div``;

export const StatusFilterWrapper = styled.div`
  margin-right: 1rem;
`;

export const CategoryFilterWrapper = styled.div``;

export const ContainerMarginTop = styled.div`
  width: 200px;
`;

export const PaginationWrapper = styled.div`
  padding: 4rem 0 6rem;
`;
