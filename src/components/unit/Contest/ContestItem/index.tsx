import StyleLink from 'components/commons/StyleLink';
import { TBodyTd } from 'components/commons/Table/style';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLogin } from 'repository/auth';
import { ContestInfo } from 'types/api';

interface ContestItemProps {
  contestItem: ContestInfo;
}

const ContestItem = ({ contestItem }: ContestItemProps) => {
  const { id, title, participants, startTime, endTime } = contestItem;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkLogin = (e: React.MouseEvent) => {
    if (!isLogin()) {
      // Toast.error('로그인 후 이용하실 수 있습니다.');
      e.preventDefault();
      dispatch(Logintoggle());
    }
  };

  return (
    <tr>
      <TBodyTd>
        <StyleLink to={`${id}`} onClick={checkLogin}>
          {title}
        </StyleLink>
      </TBodyTd>
      <TBodyTd>{participants}</TBodyTd>
      <TBodyTd>
        {startTime} ~ {endTime}
      </TBodyTd>
    </tr>
  );
};

export default ContestItem;
