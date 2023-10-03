import styled from 'styled-components';

export const ResultStampWrapper = styled.div`
  position: absolute;
  top: 7.8rem;
  right: 12.7rem;
`;

export const Image = styled.img<{ isAction?: boolean }>`
  width: 12.8rem;
  height: 12.8rem;
  transform: rotateZ(15deg);
  animation: ${props =>
    props.isAction ? '5100ms ease-in scaleStamp forwards' : 'none'};
  @keyframes scaleStamp {
    0% {
      scale: 0;
    }

    95% {
      scale: 0;
    }

    100% {
      scale: 1;
    }
  }
`;
