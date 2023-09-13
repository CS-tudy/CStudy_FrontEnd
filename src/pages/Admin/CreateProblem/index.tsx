import Button from 'components/commons/Button/Button';
import React from 'react';
import * as S from './style';
import List from '../common';
import { problemSet } from 'api/problem';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const CreateProblem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FieldValues> = FormData => {
    console.log(FormData);
  };

  return (
    <S.CPWrapper>
      <S.innerCP>
        <List />
        <S.CpDiv>
          <S.CpTitle>문제 생성</S.CpTitle>
          <S.CpForm onSubmit={handleSubmit(onSubmit)}>
            <S.CpInputSelect>
              <label htmlFor="title">제목</label>
              <input
                id="title"
                placeholder="내용을 입력해주세요"
                required
                type="text"
              />
              <label htmlFor="explanation">설명</label>
              <input
                id="explanation"
                placeholder="내용을 입력해주세요"
                required
                type="text"
              />

              <label htmlFor="answer">정답 설명</label>
              <input
                id="answer"
                placeholder="내용을 입력해주세요"
                required
                type="text"
              />
              <label htmlFor="category">카테고리</label>
              <select id="category">
                <option value="Network">네트워크</option>
                <option value="JAVA">자바</option>
                <option value="OS">운영체제</option>
                <option value="DB">데이터베이스</option>
                <option value="CS">일반 CS</option>
              </select>
            </S.CpInputSelect>
            <S.CpInput>
              <S.Ex>
                <label htmlFor="1">보기1</label>
                <input
                  id="1"
                  placeholder="내용을 입력해주세요"
                  required
                  type="text"
                />
                <S.CheckBoxInput id="1" type="checkbox" value="Choice 1" />
              </S.Ex>
              <S.Ex>
                <label htmlFor="2">보기2</label>
                <input
                  id="2"
                  placeholder="내용을 입력해주세요"
                  required
                  type="text"
                />
                <S.CheckBoxInput id="2" type="checkbox" value="Choice 2" />
              </S.Ex>
              <S.Ex>
                <label htmlFor="3">보기3</label>
                <input
                  id="3"
                  placeholder="내용을 입력해주세요"
                  required
                  type="text"
                />
                <S.CheckBoxInput id="3" type="checkbox" value="Choice 3" />
              </S.Ex>
              <S.Ex>
                <label htmlFor="4">보기4</label>
                <input
                  id="4"
                  placeholder="내용을 입력해주세요"
                  required
                  type="text"
                />
                <S.CheckBoxInput id="4" type="checkbox" value="Choice 4" />
              </S.Ex>
              <S.CpButton>
                <Button type="submit" variant="primary" size="medium">
                  확인
                </Button>
                <Button type="button" variant="primary" size="medium">
                  취소
                </Button>
              </S.CpButton>
            </S.CpInput>
          </S.CpForm>
        </S.CpDiv>
      </S.innerCP>
    </S.CPWrapper>
  );
};

export default CreateProblem;
