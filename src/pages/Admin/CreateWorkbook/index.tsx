import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { WorkbookSetForm } from 'types/Form';
import ContentContainer from 'components/commons/ContentContainer';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import { FormBody } from 'components/commons/Admin/FormBody/style';
import AdminInput from 'components/commons/Admin/AdminInput';
import FormSection from 'components/commons/Admin/FormSection';
import { useWorkbookSet } from 'hooks/@query/workbook/useWorkbookSet';
import { Button } from 'components/commons/Button/Style';
import WorkbookImageUpload from 'components/commons/Admin/WorkbookImgModal';
import AdminContainer from '../AdminContainer';
import { isAdmin } from 'repository/auth';

const CreateWorkbook = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
  const handleIsModal = (isModalOpen: boolean) => {
    setIsModalOpen(isModalOpen);
  };

  const WorkbookSet = useWorkbookSet({ handleIsLoading, handleIsModal });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    setIsLoading(true);
    WorkbookSet(data as WorkbookSetForm);
  };

  return (
    <>
      {isAdmin() ? (
        <AdminContainer>
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
                    placeholder="문제집 제목을 입력해주세요"
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
                    placeholder="문제집 내용을 입력해주세요"
                  />
                </FormSection>
                <Button type="submit" variant="primary" size="mideum">
                  문제집 등록하기
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate(-1)}
                  variant="gray"
                  size="mideum"
                >
                  돌아가기
                </Button>
              </FormBody>
            </form>
            {isModalOpen && (
              <WorkbookImageUpload handleIsModal={handleIsModal} />
            )}
          </ContentBodyWrapper>
        </AdminContainer>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default CreateWorkbook;
