import * as Styled from './style';

interface ApproveStatusProps {
  flag?: boolean;
  small?: boolean;
}

const ApproveStatus = ({ flag, small }: ApproveStatusProps) => {
  return (
    <Styled.ApproveStatus small={small} isApproved={flag}>
      {flag ? '승인' : '대기'}
    </Styled.ApproveStatus>
  );
};

export default ApproveStatus;
