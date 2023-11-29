import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  useCreateRequest,
  useEditRequest,
} from 'hooks/@query/request/useMutateRequest';

import * as S from './style';
import Container from 'components/commons/Container';
import Button from 'components/commons/Button/Button';
import Input from 'components/commons/Input';
import ContentContainer from 'components/commons/ContentContainer';
import TextEditor from 'components/commons/TextEditor';

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
    trigger,
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

  const extractText = (htmlString: any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };

  const handleChange = (value: string) => {
    setValue('description', value === '<p><br></p>' ? '' : value);
    trigger('description');
  };

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
            placeholder={isEdit ? data?.title : ''}
            defaultValue={data?.title}
            required
            register={register}
            errors={errors}
          />
          <S.Div />
          <TextEditor
            id="description"
            label="내용"
            onChange={handleChange}
            isRequest={true}
            defaultValue={
              extractText(data?.description) === 'undefined'
                ? ''
                : extractText(data?.description)
            }
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
