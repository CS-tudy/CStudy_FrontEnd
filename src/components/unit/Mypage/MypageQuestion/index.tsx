import React from 'react';
import {
  BoardTable,
  BoardTitle,
  MypageBoardInner,
  MypageBoardWrapper,
  Thead,
} from '../MypageBoard/style';

function MypageQuestion() {
  return (
    <MypageBoardWrapper>
      <BoardTitle>내가 풀은 문제</BoardTitle>
      <MypageBoardInner>
        <BoardTable cellSpacing={0}>
          <colgroup>
            <col width={'10%'} />
            <col width={'45%'} />
            <col width={'25%'} />
            <col width={'10%'} />
            <col width={'10%'} />
          </colgroup>
          <thead>
            <tr>
              <Thead>NO.</Thead>
              <Thead>문제이름</Thead>
              <Thead>카테고리</Thead>
              <Thead>맞춘문제</Thead>
              <Thead>틀린문제</Thead>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </BoardTable>
      </MypageBoardInner>
    </MypageBoardWrapper>
  );
}

export default MypageQuestion;
