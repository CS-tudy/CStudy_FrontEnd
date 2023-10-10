import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const FormBody = styled.div`
  border-radius: 0.8rem;
  padding: 2rem 3rem;
  border: 0.1rem solid ${COLOR.WHITE};
  box-shadow: ${SHADOW.CONTENTBOX_MD};
`;
