import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { WorkbookSetForm } from 'types/Form';
import ContentContainer from 'components/commons/ContentContainer';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import { FormBody } from 'components/commons/Admin/FormBody/style';
import AdminInput from 'components/commons/Admin/AdminInput';
import FormSection from 'components/commons/Admin/FormSection';
import { useWorkbookSet } from 'hooks/@query/workbook/useWorkbookSet';

const CreateWorkbook = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const WorkbookSet = useWorkbookSet({ handleIsLoading });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);
    WorkbookSet(data as any);
  };

  return (
    <ContentContainer>
      <ContentBodyWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormBody>
            <FormSection title="문제집 이름을 입력해 주세요">
              <AdminInput
                type="text"
                id="title"
                name="title"
                label="문제집 이름"
                register={register}
                errors={errors}
                disabled={isLoading}
                required
              />
            </FormSection>
            <FormSection title="문제집 설명을 입력해 주세요">
              <AdminInput
                type="textarea"
                id="description"
                name="description"
                label="문제집 설명"
                register={register}
                errors={errors}
                disabled={isLoading}
                required
              />
            </FormSection>
            <button type="submit">문제집 등록하기</button>
            <button type="button" onClick={() => navigate(-1)}>
              돌아가기
            </button>
          </FormBody>
        </form>
      </ContentBodyWrapper>
    </ContentContainer>
  );
};

export default CreateWorkbook;
