import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  useCreateRequest,
  useEditRequest,
} from 'hooks/@query/request/useMutateRequest';

import * as S from './style';
import Container from 'components/commons/Container';
import TextArea from 'components/commons/TextArea';
import Button from 'components/commons/Button/Button';
import Input from 'components/commons/Input';
import ContentContainer from 'components/commons/ContentContainer';

interface RequesetWriteProps {
  isEdit: boolean;
  data?: any;
}

const RequestWrite = ({ isEdit, data }: RequesetWriteProps) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: data?.title || '',
      description: data?.description || '',
    },
  });

  const handleNavigate = () => {
    navigate(-1);
  };

  const { mutate: createRequest } = useCreateRequest();
  const { mutate: editRequest } = useEditRequest();

  const submitForm: SubmitHandler<FieldValues> = FormData => {
    setValue('title', data?.title || '');
    setValue('description', data?.description || '');

    const updateRequestInput: {
      id: string;
      title?: string;
      description?: string;
    } = { id: data?.id };

    if (FormData.title) updateRequestInput.title = FormData.title;
    if (FormData.description)
      updateRequestInput.description = FormData.description;

    if (isEdit) editRequest(updateRequestInput);
    else createRequest(FormData);
  };

  return (
    <ContentContainer>
      <Container>
        <S.Form onSubmit={handleSubmit(submitForm)} noValidate>
          <Input
            id="title"
            label="제목"
            placeholder={isEdit ? data?.title : '제목을 입력해주세요'}
            defaultValue={data?.title}
            required
            register={register}
            errors={errors}
          />
          <S.Div />
          <TextArea
            id="description"
            label="내용"
            placeholder={isEdit ? data?.description : '내용을 입력해주세요'}
            defaultValue={data?.description}
            required
            register={register}
            errors={errors}
          />
          <S.ButtonWrapper>
            <Button type="submit" variant="primary" size="medium">
              {isEdit ? '수정하기' : '등록하기'}
            </Button>
            <Button variant="gray" size="medium" onClick={handleNavigate}>
              돌아가기
            </Button>
          </S.ButtonWrapper>
        </S.Form>
      </Container>
    </ContentContainer>
  );
};

export default RequestWrite;
