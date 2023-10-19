import { useSelector } from 'react-redux';

import Button from 'components/commons/Button/Button';
import StyleLink from 'components/commons/StyleLink';
import Filter from 'components/commons/Filter';
import { useNavigate } from 'react-router-dom';
import { isLogin } from 'repository/auth';

interface LoginSwitchButtonProps {
  handleToggle: () => void;
  isActive: string;
}

const LoginSwitchButton = ({
  isActive,
  handleToggle,
}: LoginSwitchButtonProps) => {
  const navigate = useNavigate();

  const checkLogin = () => {
    if (!isLogin()) {
      alert('로그인 후 이용하실 수 있습니다.');
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
          {/* <StyleLink to="request" className="xl navy style">
            글 작성
          </StyleLink> */}
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
