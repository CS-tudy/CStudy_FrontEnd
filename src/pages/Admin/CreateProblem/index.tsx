import React from 'react';
import Button from 'components/commons/Button/Button';
import * as S from './style';
import List from '../../../components/admin/List';
import { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import CreateProblemSelect from '../../../components/unit/CreateProblem/CreateProblemSelect';
import CreateProblemInput from '../../../components/unit/CreateProblem/CreateProblemInput';
import { useCreateProblem } from 'hooks/@query/problem/useCreateProblem';
import AdminContainer from '../AdminContainer';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';

const CreateProblem = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
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
  const { mutate: CreateProblem } = useCreateProblem();

  const onSubmit = () => {
    const create = getValues();
    CreateProblem(create);
    reset();
  };

  return (
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
              resgiterName="createQuestionRequestDto.questionTitle"
              required
              errors={errors}
            />
            <CreateProblemInput
              id="questionExplain"
              label="설명"
              type="text"
              placeholder="내용을 입력해주세요"
              register={register}
              resgiterName="createQuestionRequestDto.questionExplain"
              required
              errors={errors}
            />

            <CreateProblemInput
              id="questionDesc"
              label="정답 설명"
              type="text"
              placeholder="내용을 입력해주세요"
              register={register}
              resgiterName="createQuestionRequestDto.questionDesc"
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
                resgiterName="createChoicesAboutQuestionDto.0.content"
                required
                errors={errors}
              />
              <CreateProblemInput
                id="1"
                type="radio"
                register={register}
                name="problem"
                resgiterName="createChoicesAboutQuestionDto.0.answer"
                value="정답"
                required
                errors={errors}
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
                errors={errors}
              />
              <CreateProblemInput
                id="2"
                type="radio"
                register={register}
                name="problem"
                resgiterName="createChoicesAboutQuestionDto.1.answer"
                value="정답"
                required
                errors={errors}
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
                errors={errors}
              />
              <CreateProblemInput
                id="3"
                type="radio"
                register={register}
                name="problem"
                resgiterName="createChoicesAboutQuestionDto.2.answer"
                value="정답"
                required
                errors={errors}
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
                errors={errors}
              />
              <CreateProblemInput
                id="4"
                type="radio"
                register={register}
                name="problem"
                resgiterName="createChoicesAboutQuestionDto.3.answer"
                value="정답"
                required
                errors={errors}
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
      </ContentBodyWrapper>
    </AdminContainer>
  );
};

export default CreateProblem;
