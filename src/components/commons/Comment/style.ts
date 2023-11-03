import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';

export const Container = styled.div`
  padding: 6rem;
  background-color: ${COLOR.WHITE};
  border: 0.1rem solid ${COLOR.WHITE};
  border-radius: 5rem;
  box-shadow: ${SHADOW.CONTENTBOX_LG};
`;
