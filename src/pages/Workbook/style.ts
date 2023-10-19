import { Button } from './../../components/unit/SignUp/style';
import { COLOR } from 'constants/Color';
import { media } from 'constants/media';
import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 34.8rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
  border: 1px solid ${COLOR.GRAY_200};
  ${media.mobildL} {
    width: 100%;
  }
`;

export const PaginationWrapper = styled.div`
  padding: 4rem 0 6rem;
`;
