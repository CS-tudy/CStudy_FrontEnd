import React from 'react';
import Button from 'components/commons/Button/Button';
import * as S from './style';
import List from '../admin/List';
import { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useCreateProblem } from 'hooks/useCreateProblem';
import { AppDispatch } from 'hooks/@redux/problemSlice';

const ProblemForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      createQuestionRequestDto: {
        questionDesc: '',
        questionExplain: '',
        questionTitle: '',
      },
      categoryRequestDto: {
        category: '',
      },
      createChoicesAboutQuestionDto: [
        {
          number: 1,
          content: '',
          answer: '정답',
        },
        {
          number: 2,
          content: '',
          answer: '정답',
        },
        {
          number: 3,
          content: '',
          answer: '정답',
        },
        {
          number: 4,
          content: '',
          answer: '정답',
        },
      ],
    },
  });

  const onSubmit = (formData: FieldValues) => {
    console.log(formData);
    dispatch(useCreateProblem(formData));
  };

  return (
    <S.CPWrapper>
      <S.innerCP>
        <List />
        <S.CpDiv>
          <S.CpTitle>문제 생성</S.CpTitle>
          <S.CpForm onSubmit={handleSubmit(onSubmit)}>
            <S.CpInputSelect>
              <label htmlFor="questionTitle">제목</label>
              <input
                id="questionTitle"
                placeholder="내용을 입력해주세요"
                type="text"
                {...register('createQuestionRequestDto.questionTitle')}
                required
              />
              <label htmlFor="questionExplain">설명</label>
              <input
                id="questionExplain"
                placeholder="내용을 입력해주세요"
                required
                type="text"
                {...register('createQuestionRequestDto.questionExplain')}
              />

              <label htmlFor="questionDesc">정답 설명</label>
              <input
                id="questionDesc"
                placeholder="내용을 입력해주세요"
                required
                {...register('createQuestionRequestDto.questionDesc')}
                type="text"
              />
              <label htmlFor="category">카테고리</label>
              <select
                id="category"
                {...register('categoryRequestDto.category')}
              >
                <option value="네트워크">네트워크</option>
                <option value="자바">자바</option>
                <option value="운영체제">운영체제</option>
                <option value="데이터베이스">데이터베이스</option>
                <option value="일반CS">일반 CS</option>
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
                  {...register('createChoicesAboutQuestionDto.0.content')}
                />
                <S.CheckBoxInput
                  id="1"
                  type="checkbox"
                  value="정답"
                  {...register('createChoicesAboutQuestionDto.0.answer')}
                />
              </S.Ex>
              <S.Ex>
                <label htmlFor="2">보기2</label>
                <input
                  id="2"
                  placeholder="내용을 입력해주세요"
                  required
                  type="text"
                  {...register('createChoicesAboutQuestionDto.1.content')}
                />
                <S.CheckBoxInput
                  id="2"
                  type="checkbox"
                  value="정답"
                  {...register('createChoicesAboutQuestionDto.1.answer')}
                />
              </S.Ex>
              <S.Ex>
                <label htmlFor="3">보기3</label>
                <input
                  id="3"
                  placeholder="내용을 입력해주세요"
                  required
                  type="text"
                  {...register('createChoicesAboutQuestionDto.2.content')}
                />
                <S.CheckBoxInput
                  id="3"
                  type="checkbox"
                  value="정답"
                  {...register('createChoicesAboutQuestionDto.2.answer')}
                />
              </S.Ex>
              <S.Ex>
                <label htmlFor="4">보기4</label>
                <input
                  id="4"
                  placeholder="내용을 입력해주세요"
                  required
                  type="text"
                  {...register('createChoicesAboutQuestionDto.3.content')}
                />
                <S.CheckBoxInput
                  id="4"
                  type="checkbox"
                  value="정답"
                  {...register('createChoicesAboutQuestionDto.3.answer')}
                />
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

export default ProblemForm;
