import React, { useState } from 'react';
import Button from 'components/commons/Button/Button';
import * as S from './style';
import { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useCreateProblem } from 'hooks/@query/problem/useCreateProblem';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import { isAdmin } from 'repository/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import AdminContainer from '../AdminContainer';
import { AdminBtn } from 'components/commons/Admin/AdminInput/style';
import CreateProblemInput from 'components/commons/Admin/AdminCreateProblem/CreateProblemInput';
import CreateProblemSelect from 'components/commons/Admin/AdminCreateProblem/CreateProblemSelect';

const CreateProblem = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
    setValue,
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
          answer: null,
        },
        {
          number: 2,
          content: '',
          answer: null,
        },
        {
          number: 3,
          content: '',
          answer: null,
        },
        {
          number: 4,
          content: '',
          answer: null,
        },
      ],
    },
  });

  const { mutate: CreateProblem } = useCreateProblem();

  const handleCheckboxChange = (name: string) => {
    setValue('createChoicesAboutQuestionDto.0.answer', null);
    setValue('createChoicesAboutQuestionDto.1.answer', null);
    setValue('createChoicesAboutQuestionDto.2.answer', null);
    setValue('createChoicesAboutQuestionDto.3.answer', null);
    setValue(name, !watch(name));
  };

  const onSubmit = () => {
    const create = getValues();
    CreateProblem(create);
    reset();
  };

  return (
    <>
      {isAdmin() ? (
        <AdminContainer>
          <ContentBodyWrapper>
            <S.CpTitle>문제 생성</S.CpTitle>
            <S.CpForm onSubmit={handleSubmit(onSubmit)}>
              <S.CpInputSelect>
                <CreateProblemInput
                  id="questionTitle"
                  label="문제"
                  type="text"
                  placeholder="내용을 입력해주세요"
                  register={register}
                  name="createQuestionRequestDto.questionTitle"
                  required
                  errors={errors}
                />
                <CreateProblemInput
                  id="questionExplain"
                  label="설명"
                  type="text"
                  placeholder="내용을 입력해주세요"
                  register={register}
                  name="createQuestionRequestDto.questionDesc"
                  required
                  errors={errors}
                />
                <CreateProblemInput
                  id="questionDesc"
                  label="문제 정답 설명"
                  type="text"
                  placeholder="내용을 입력해주세요"
                  register={register}
                  name="createQuestionRequestDto.questionExplain"
                  required
                  errors={errors}
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
                    name="createChoicesAboutQuestionDto.0.content"
                    required
                    errors={errors}
                  />
                  <CreateProblemInput
                    id="1"
                    type="checkbox"
                    register={register}
                    name="createChoicesAboutQuestionDto.0.answer"
                    value="정답"
                    errors={errors}
                    checked={watch('createChoicesAboutQuestionDto.0.answer')}
                    onChange={() =>
                      handleCheckboxChange(
                        'createChoicesAboutQuestionDto.0.answer',
                      )
                    }
                  />
                </S.Ex>
                <S.Ex>
                  <CreateProblemInput
                    id="2"
                    label="보기 2"
                    type="text"
                    placeholder="내용을 입력해주세요"
                    register={register}
                    name="createChoicesAboutQuestionDto.1.content"
                    required
                    errors={errors}
                  />
                  <CreateProblemInput
                    id="2"
                    type="checkbox"
                    register={register}
                    name="createChoicesAboutQuestionDto.1.answer"
                    value="정답"
                    errors={errors}
                    checked={watch('createChoicesAboutQuestionDto.1.answer')}
                    onChange={() =>
                      handleCheckboxChange(
                        'createChoicesAboutQuestionDto.1.answer',
                      )
                    }
                  />
                </S.Ex>
                <S.Ex>
                  <CreateProblemInput
                    id="3"
                    label="보기 3"
                    type="text"
                    placeholder="내용을 입력해주세요"
                    register={register}
                    name="createChoicesAboutQuestionDto.2.content"
                    errors={errors}
                  />
                  <CreateProblemInput
                    id="3"
                    type="checkbox"
                    register={register}
                    name="createChoicesAboutQuestionDto.2.answer"
                    value="정답"
                    errors={errors}
                    checked={watch('createChoicesAboutQuestionDto.2.answer')}
                    onChange={() =>
                      handleCheckboxChange(
                        'createChoicesAboutQuestionDto.2.answer',
                      )
                    }
                  />
                </S.Ex>
                <S.Ex>
                  <CreateProblemInput
                    id="4"
                    label="보기 4"
                    type="text"
                    placeholder="내용을 입력해주세요"
                    register={register}
                    name="createChoicesAboutQuestionDto.3.content"
                    required
                    errors={errors}
                  />
                  <CreateProblemInput
                    id="4"
                    type="checkbox"
                    register={register}
                    name="createChoicesAboutQuestionDto.3.answer"
                    value="정답"
                    errors={errors}
                    checked={watch('createChoicesAboutQuestionDto.3.answer')}
                    onChange={() =>
                      handleCheckboxChange(
                        'createChoicesAboutQuestionDto.3.answer',
                      )
                    }
                  />
                </S.Ex>
                <AdminBtn>
                  <Button type="submit" variant="primary" size="medium">
                    확인
                  </Button>
                  <Button
                    onClick={() => navigate(-1)}
                    type="button"
                    variant="gray"
                    size="medium"
                  >
                    취소
                  </Button>
                </AdminBtn>
              </S.CpInput>
            </S.CpForm>
          </ContentBodyWrapper>
        </AdminContainer>
      ) : (
        <>
          <Navigate to="/" />
        </>
      )}
    </>
  );
};

export default CreateProblem;
