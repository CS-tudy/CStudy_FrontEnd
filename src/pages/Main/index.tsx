import Button from 'components/Button/Button';
import { styled } from 'styled-components';

const Main = () => {
  return (
    <div>
      <h2>버튼 컴포넡트</h2>
      <div>
        <Wrapper>
          <Button variant="primary" size="full">
            버튼 종류 1
          </Button>
        </Wrapper>
        <Wrapper>
          <Button variant="primary" size="small">
            버튼 종류 2
          </Button>
        </Wrapper>
        <Wrapper>
          <Button variant="primary" size="medium">
            버튼 종류 3
          </Button>
        </Wrapper>
        <Wrapper>
          <Button variant="primary" size="large">
            버튼 종류 4
          </Button>
        </Wrapper>
      </div>
    </div>
  );
};

export default Main;

const Wrapper = styled.div`
  display: block;
  display: flex;
  justify-content: center;
  margin: 2rem;
`;
