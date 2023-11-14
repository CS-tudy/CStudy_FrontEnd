import { useDispatch } from 'react-redux';
import Button from 'components/commons/Button/Button';
import { useNavigate } from 'react-router-dom';
import { isLogin } from 'repository/auth';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';
import Filter from 'components/commons/Filter';

interface LoginSwitchButtonProps {
  handleToggle: () => void;
  isActive: string;
}

const LoginSwitchButton = ({
  isActive,
  handleToggle,
}: LoginSwitchButtonProps) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const checkLogin = (e: React.MouseEvent) => {
    if (!isLogin()) {
      e.preventDefault();
      dispatch(Logintoggle());
    } else {
      navigate('/request/new');
    }
  };

  return (
    <>
      {isLogin() ? (
        <>
          <div>
            <Filter className={isActive} onClick={handleToggle}>
              내가 낸 문제
            </Filter>
          </div>
          <Button variant="primary" size="medium" onClick={checkLogin}>
            글 작성
          </Button>
        </>
      ) : (
        <Button variant="primary" size="medium" onClick={checkLogin}>
          글 작성
        </Button>
      )}
    </>
  );
};

export default LoginSwitchButton;
