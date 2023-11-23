import { useRef } from 'react';
import * as S from './style';
import Button from 'components/commons/Button/Button';
import useIntersectionObsever from 'hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';
import request from 'assets/content/request.png';
import contest from 'assets/content/contest.webp';
import rank from 'assets/content/ranking.webp';

const Contents = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const isInViewport1 = useIntersectionObsever(ref1);
  const isInViewport2 = useIntersectionObsever(ref2);
  const isInViewport3 = useIntersectionObsever(ref3);

  const navigate = useNavigate();

  const moveToProblem = () => {
    navigate('/request');
  };
  const moveToContest = () => {
    navigate('/contest');
  };
  const moveToRank = () => {
    navigate('/membersranks');
  };

  return (
    <S.Wrapper>
      <S.Title>
        <S.DispalyNoneTitle>
          <S.SubTitle>
            아직도 재미 없는 해외 전공서적으로 CS공부하시나요?
          </S.SubTitle>
          <S.BoldTitle>
            CS공부 <S.Word>퀴즈</S.Word> 풀면서 재밌게 해보세요!
          </S.BoldTitle>
        </S.DispalyNoneTitle>
        <S.MobileText>
          CS공부 <S.Word>퀴즈</S.Word> 풀면서
          <br />
          재밌게 해보세요!
        </S.MobileText>
      </S.Title>
      <S.Content>
        <S.ContentWrapper>
          <S.Image>
            <S.Image1 ref={ref1} className={isInViewport1 ? 'animation' : ''}>
              <S.ShadowedImg src={request} />
            </S.Image1>
          </S.Image>
          <S.RightBody>
            <S.BoldText>
              어렵게 생각하는 CS지식을 <S.Word>문의</S.Word>하세요!
            </S.BoldText>
            <S.MobileText>
              어렵게 생각하는
              <br />
              CS지식을 <S.Word>문의</S.Word>하세요!
            </S.MobileText>
            <S.Text>
              CSTUDY에 어렵게 생각하시는 CS지식을 문의하시면
              <br />
              퀴즈 형태로 더욱 쉽게 접근 하고 학습 할 수 있게 도와줍니다.
            </S.Text>
            <S.ButtonWrapper></S.ButtonWrapper>
          </S.RightBody>
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <Button variant="primary" size="full2" onClick={moveToProblem}>
            문제 요청하기
          </Button>
        </S.ButtonWrapper>
      </S.Content>
      <S.Title>
        <S.DispalyNoneTitle>
          CS지식 공부를 했는데
          <br />
          공부한것에 대한 확신이 없으신가요?
        </S.DispalyNoneTitle>
        <S.MobileText>
          CS지식 공부를 했는데
          <br />
          공부한것에 대한
          <br />
          확신이 없으신가요?
        </S.MobileText>
      </S.Title>
      <S.Content>
        <S.ContentWrapper2>
          <S.Image>
            <S.Image2 ref={ref2} className={isInViewport2 ? 'animation' : ''}>
              <S.Img src={contest} />
            </S.Image2>
          </S.Image>
          <S.RightBody>
            <S.BoldText>
              CS지식 <S.Word>대회</S.Word>에 참여해서 테스트해보세요!
            </S.BoldText>
            <S.MobileText>
              CS지식 <S.Word>대회</S.Word>에 참여해서
              <br />
              테스트해보세요!
            </S.MobileText>
            <S.Text>
              CSTUDY는 어려운 CS지식을 테스트 해주는 대회를 운영하고 있습니다.
              <br />
              대회를 통해 성장한 자신을 확인하고, 더욱 성장하세요!
            </S.Text>
          </S.RightBody>
        </S.ContentWrapper2>
        <S.ButtonWrapper>
          <Button variant="primary" size="full2" onClick={moveToContest}>
            대회 참여하기
          </Button>
        </S.ButtonWrapper>
      </S.Content>
      <S.Title>
        <S.DispalyNoneTitle>CS지식 혼자 공부하기 힘든가요?</S.DispalyNoneTitle>
        <S.MobileText>
          CS지식 혼자서
          <br />
          공부하기 힘든가요?
        </S.MobileText>
      </S.Title>
      <S.Content>
        <S.ContentWrapper>
          <S.Image>
            <S.Image3 ref={ref3} className={isInViewport3 ? 'animation' : ''}>
              <S.Img src={rank} />
            </S.Image3>
          </S.Image>
          <S.RightBody>
            <S.BoldText>
              점수와 <S.Word>랭킹</S.Word>을 올려 랭커에 도전하세요!
            </S.BoldText>
            <S.MobileText>
              점수와 <S.Word>랭킹</S.Word>을 올려
              <br />
              랭커에 도전 하세요!
            </S.MobileText>
            <S.Text>
              CSTUDY의 랭킹은 혼자 공부 하기 힘들고 어렵지만,
              <br />
              어려움을 딛고 같이 성장하기 위해 노력하는
              <br />
              동료들과 함께 선의의 경쟁을 할 수 있게 준비했습니다.
            </S.Text>
          </S.RightBody>
        </S.ContentWrapper>
        <S.ButtonWrapper>
          <Button variant="primary" size="full2" onClick={moveToRank}>
            랭킹 확인하기
          </Button>
        </S.ButtonWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Contents;
