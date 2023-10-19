import * as S from './style';

interface ApproveStatusProps {
  flag?: boolean;
  small?: boolean;
}

const ApproveStatus = ({ flag, small }: ApproveStatusProps) => {
  return (
    <S.ApproveStatus small={small} isApproved={flag}>
      {flag ? '승인' : '대기'}
    </S.ApproveStatus>
  );
};

export default ApproveStatus;
