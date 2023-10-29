import React from 'react';
import AdminContainer from '../AdminContainer';
import { useForm } from 'react-hook-form';
import AdminInput from 'components/commons/Admin/AdminInput';
import FormSection from 'components/commons/Admin/FormSection';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import Button from 'components/commons/Button/Button';
import { useNavigate } from 'react-router-dom';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import ContainerBottom from 'components/commons/ContainerBottom';
import { AdminBtn } from 'components/commons/Admin/AdminInput/style';

interface ContestInputProps {
  label?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  errors: FieldErrors;
}

const CreateContest = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  return (
    <AdminContainer>
      <ContentBodyWrapper>
        <form>
          <FormSection title="대회 생성">
            <AdminInput
              id="start"
              errors={errors}
              register={register}
              type="date"
              name="dd"
              label="대회 시작일"
              required
            />
            <AdminInput
              id="end"
              errors={errors}
              register={register}
              type="date"
              label="대회 종료일"
              name="대회 종료일"
              required
            />
            <AdminInput
              id="title"
              errors={errors}
              register={register}
              type="text"
              label="대회 제목"
              name="대회 제목"
              required
            />
            <AdminInput
              id="personnel"
              errors={errors}
              register={register}
              type="number"
              label="참여 인원"
              name="참여 인원"
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
