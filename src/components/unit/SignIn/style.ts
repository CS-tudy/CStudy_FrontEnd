import { FONT } from 'constants/Font';
import { COLOR } from './../../../constants/Color';
import { styled } from 'styled-components';

export const Input = styled.input`
  &:focus {
    border: 0.1rem solid #0078ff;
  }

  width: 33.6rem;
  height: 4rem;
  padding: 1rem;
  border: 0.1rem solid #d3d3d3;
  border-radius: 0.8rem;
  margin-top: 1rem;
`;

export const ErrorMessage = styled.div`
  display: block;

  & p {
    color: ${COLOR.RED};
    font-size: ${FONT.REGULAR_12};
    margin-top: 1rem;
  }
`;

export const SocialLogin = styled.div`
  margin: 3rem auto 0;
`;

export const GoogleLogo = styled.img`
  width: 7rem;
  height: 7rem;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;
