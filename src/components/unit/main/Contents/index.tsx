import React from 'react';
import * as S from './style';
import rank_webp from 'assets/content/rank.webp';
import inquiry_webp from 'assets/content/inquiry.webp';
import competition_webp from 'assets/content/competition.webp';
import LinkButton from 'components/commons/LinkButton';

const Contents = () => {
  return (
    <>
      <S.ContentSection>
        <S.ContentWrapper>
          <S.ContentTitleImg>
            <S.ContentTitle>
              CS공부 아직도 재미 없는
              <br />
              해외 전공서적으로 공부하시나요?
            </S.ContentTitle>
            <S.ContentImg src={inquiry_webp} alt="inquiry_webp" />
          </S.ContentTitleImg>
          <S.ContentTexts>
            <p>
              <S.TextTitle>어렵게 생각하는 CS지식을 문의하세요!</S.TextTitle>
              <S.Texts>
                어렵게 생각하는 CS지식 혼자 공부하기 어려우신 가요?
                <br />
                쉽게 접근 할 수 있는 방법 없을까? 라고 고민해 본적 한번이라도
                있으신가요?
                <br />
                <br />
                <S.BoldText>그래서 준비했습니다!</S.BoldText>
                <br />
                CSTUDY에 어렵게 생각하시는 CS지식을 문의하시면
                <br />
                퀴즈 형태로 더욱 쉽게 접근 하고 학습 할 수 있게 도와줍니다.
              </S.Texts>
              <LinkButton variant="primary" size="large" to="/problem">
                문제 풀러가기
              </LinkButton>
            </p>
          </S.ContentTexts>
        </S.ContentWrapper>
      </S.ContentSection>
      <S.ContentSection>
        <S.ContentWrapperReverse>
          <S.ContentTexts>
            <p>
              <S.TextTitle>
                대회에 참여해서 CS지식을 테스트해보세요!
              </S.TextTitle>
              <S.Texts>
                안그래도 재미없는 전공! 한국어도 아닌 영어로 머리를 싸매고
                힘들어하고 있으신가요?
                <br />
                그렇게 공부했는데 제대로 공부했는지 확신이 안 생기시나요?
                <br />
                <br />
                <S.BoldText>그래서 준비했습니다!</S.BoldText>
                <br />
                CSTUDY는 어려운 CS지식을 테스트 해주는 대회를 운영하고 있습니다.
                <br />
                대회를 통해 성장한 자신을 확인하고, 더욱 성장하세요!
              </S.Texts>
              <LinkButton variant="primary" size="large" to="/contest">
                대회 보러가기
              </LinkButton>
            </p>
          </S.ContentTexts>

          <S.ContentTitleImg>
            <S.ContentTitle>
              CS지식 공부를 했는데
              <br />
              공부한것에 대한 확신이 없으신가요?
            </S.ContentTitle>
            <S.ContentImg src={competition_webp} alt="competition_webp" />
          </S.ContentTitleImg>
        </S.ContentWrapperReverse>
      </S.ContentSection>
      <S.ContentSection>
        <S.ContentWrapper>
          <S.ContentTitleImg>
            <S.ContentTitle>
              점수와 랭킹을 올려 랭커에 도전 하세요!
            </S.ContentTitle>
            <S.ContentImg src={rank_webp} alt="membersRank_webp" />
          </S.ContentTitleImg>
          <S.ContentTexts>
            <p>
              <S.TextTitle>
                개발자는 계속 성장해야 하는 직업 입니다.
              </S.TextTitle>
              <S.Texts>
                많은 시니어 개발자들이 시니어 개발자가 되기 위한 덕목중 CS지식을
                <br />
                꼽을 정도로 CS 지식은 중요합니다. 하지만, 너무 어려운 것도 사실
                입니다.
                <br />
                <br />
                <S.BoldText>그래서 준비했습니다!</S.BoldText>
                <br />
                CSTUDY의 랭킹은 혼자 공부 하기 힘들고 어렵지만, 어려움을 딛고
                같이 성장하기
                <br />
                위해 노력하는 동료들을 확인하고 선의의 경쟁을 위해 준비했습니다.
              </S.Texts>
              <LinkButton variant="primary" size="large" to="/membersranks">
                랭킹 확인하기
              </LinkButton>
            </p>
          </S.ContentTexts>
        </S.ContentWrapper>
      </S.ContentSection>
    </>
  );
};

export default Contents;
