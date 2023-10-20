import styled from 'styled-components';
import { COLOR } from 'constants/Color';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 70px;
  margin-top: 6rem;
  width: 100%;
  padding-right: 5vw;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* border-bottom: 0.1rem solid ${COLOR.GRAY_100}; */
  /* padding-bottom: 2rem; */
`;

export const PaginationWrapper = styled.div`
  padding: 4rem 0 6rem;
`;
