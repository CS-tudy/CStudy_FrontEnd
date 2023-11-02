import React from 'react';
import AdminContainer from '../AdminContainer';
import { useForm } from 'react-hook-form';
import AdminInput from 'components/commons/Admin/AdminInput';
import FormSection from 'components/commons/Admin/FormSection';
import { FieldValues } from 'react-hook-form';
import Button from 'components/commons/Button/Button';
import { useNavigate } from 'react-router-dom';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import { AdminBtn } from 'components/commons/Admin/AdminInput/style';
import { useContestSet } from 'hooks/@query/contest/useContestSet';

const CreateContest = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      competitionStart: '',
      competitionEnd: '',
      competitionTitle: '',
      participants: 0,
    },
  });

  const navigate = useNavigate();

  const { mutate: ContestSet } = useContestSet();
  const handleContest = () => {
    const contest = getValues();

    const competitionStart = contest.competitionStart.replace('T', ' ');
    const competitionEnd = contest.competitionEnd.replace('T', ' ');
    const date = {
      competitionStart,
      competitionEnd,
      competitionTitle: contest.competitionTitle,
      participants: contest.participants,
    };
    console.log(date);
    ContestSet(date);
  };
  return (
    <AdminContainer>
      <ContentBodyWrapper>
        <form onSubmit={handleSubmit(handleContest)}>
          <FormSection title="대회 생성">
            <AdminInput
              id="start"
              errors={errors}
              register={register}
              type="datetime-local"
              name="competitionStart"
              label="대회 시작일"
              required
            />
            <AdminInput
              id="end"
              errors={errors}
              register={register}
              type="datetime-local"
              label="대회 종료일"
              name="competitionEnd"
              required
            />
            <AdminInput
              id="title"
              errors={errors}
              register={register}
              type="text"
              label="대회 제목"
              name="competitionTitle"
              required
              placeholder="내용을 입력해주세요"
            />
            <AdminInput
              id="personnel"
              errors={errors}
              register={register}
              type="number"
              label="참여 인원"
              name="participants"
              required
            />
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
          </FormSection>
        </form>
      </ContentBodyWrapper>
    </AdminContainer>
  );
};

export default CreateContest;
