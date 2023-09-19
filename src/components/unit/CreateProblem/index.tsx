import React, { useState } from 'react';
import Button from 'components/commons/Button/Button';
import * as S from './style';
import List from '../../admin/List';
import { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useCreateProblem } from 'hooks/useCreateProblem';
import { AppDispatch } from 'hooks/@redux/problemSlice';
import { useNavigate } from 'react-router-dom';
import CreateProblemSelect from './CreateProblemSelect';
import CreateProblemInput from './CreateProblemInput';

const ProblemForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      createQuestionRequestDto: {
        questionTitle: '',
        questionDesc: '',
        questionExplain: '',
      },
      categoryRequestDto: {
        category: '네트워크',
      },
      createChoicesAboutQuestionDto: [
        {
          number: 1,
          content: '',
          answer: '',
        },
        {
          number: 2,
          content: '',
          answer: '',
        },
        {
          number: 3,
          content: '',
          answer: '',
        },
        {
          number: 4,
          content: '',
          answer: '',
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
              <CreateProblemInput
                id="questionTitle"
                label="문제"
                type="text"
                placeholder="내용을 입력해주세요"
                register={register}
                resgiterName="createQuestionRequestDto.questionTitle"
                required
              />
              <CreateProblemInput
                id="questionExplain"
                label="설명"
                type="text"
                placeholder="내용을 입력해주세요"
                register={register}
                resgiterName="createQuestionRequestDto.questionExplain"
                required
              />

              <CreateProblemInput
                id="questionDesc"
                label="정답 설명"
                type="text"
                placeholder="내용을 입력해주세요"
                register={register}
                resgiterName="createQuestionRequestDto.questionDesc"
                required
              />
              <CreateProblemSelect
                name="categoryRequestDto.catagory"
                register={register}
              />
            </S.CpInputSelect>
            <S.CpInput>
              <S.Ex>
                <CreateProblemInput
                  id="1"
                  label="보기 1"
                  type="text"
                  placeholder="내용을 입력해주세요"
                  register={register}
                  resgiterName="createChoicesAboutQuestionDto.0.content"
                  required
                />
                <CreateProblemInput
                  id="1"
                  type="radio"
                  register={register}
                  name="problem"
                  resgiterName="createChoicesAboutQuestionDto.0.answer"
                  value="정답"
                />
              </S.Ex>
              <S.Ex>
                <CreateProblemInput
                  id="2"
                  label="보기 2"
                  type="text"
                  placeholder="내용을 입력해주세요"
                  register={register}
                  resgiterName="createChoicesAboutQuestionDto.1.content"
                  required
                />
                <CreateProblemInput
                  id="2"
                  type="radio"
                  register={register}
                  name="problem"
                  resgiterName="createChoicesAboutQuestionDto.1.answer"
                  value="정답"
                />
              </S.Ex>
              <S.Ex>
                <CreateProblemInput
                  id="3"
                  label="보기 3"
                  type="text"
                  placeholder="내용을 입력해주세요"
                  register={register}
                  resgiterName="createChoicesAboutQuestionDto.2.content"
                  required
                />
                <CreateProblemInput
                  id="3"
                  type="radio"
                  register={register}
                  name="problem"
                  resgiterName="createChoicesAboutQuestionDto.2.answer"
                  value="정답"
                />
              </S.Ex>
              <S.Ex>
                <CreateProblemInput
                  id="4"
                  label="보기 4"
                  type="text"
                  placeholder="내용을 입력해주세요"
                  register={register}
                  resgiterName="createChoicesAboutQuestionDto.3.content"
                  required
                />
                <CreateProblemInput
                  id="4"
                  type="radio"
                  register={register}
                  name="problem"
                  resgiterName="createChoicesAboutQuestionDto.3.answer"
                  value="정답"
                />
              </S.Ex>
              <S.CpButton>
                <Button type="submit" variant="primary" size="medium">
                  확인
                </Button>
                <Button type="button" variant="gray" size="medium">
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
