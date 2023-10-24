import React from 'react';
import {
  BoardTitle,
  MypageBoardInner,
  MypageBoardWrapper,
} from '../MypageBoard/MypageBoardIConbine/style';
import Table2 from 'components/commons/Table2';

function MypageQuestion() {
  return (
    <MypageBoardWrapper>
      <BoardTitle>내가 풀은 문제</BoardTitle>
      <MypageBoardInner>
        <Table2
          title={['NO.', '문제이름', '카테고리', '맞춘문제', '틀린문제']}
          colRate={['10%', '45%', '25%', '10%', '10%']}
        >
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </Table2>
      </MypageBoardInner>
    </MypageBoardWrapper>
  );
}

export default MypageQuestion;
