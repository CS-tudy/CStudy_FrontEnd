import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useCreateRequest } from 'hooks/@query/request/useCreateRequest';

// import ContentContainer from 'components/@shared/ContentContainer';
// import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
// import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
// import Input from 'components/@shared/Input';
// import TextArea from 'components/@shared/TextArea';
import * as S from './style';
import Container from 'components/commons/Container';
import TextArea from 'components/commons/TextArea';
import Button from 'components/commons/Button/Button';

const RequestWrite = () => {
  const navigate = useNavigate();

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

  const handleNavigate = () => {
    navigate(-1);
  };

  const { mutate: createRequest } = useCreateRequest();

  const submitForm: SubmitHandler<FieldValues> = FormData => {
    createRequest(FormData);
  };

  return (
    <div>
      <Container>
        <S.Form onSubmit={handleSubmit(submitForm)}>
          <h3>제목</h3>
          <input
            id="title"
            // label="게시판에 올릴 제목을 적어주세요"
            placeholder="제목을 입력해주세요"
            // required
            // register={register}
            // errors={errors}
            {...register('title', {
              required: '제목을 입력해주세요.',
            })}
          />
          <TextArea
            id="description"
            label="내용"
            placeholder="내용을 적어주세요"
            required
            register={register}
            errors={errors}
          />
          <S.ButtonWrapper style={{ display: 'absolute', right: '-30px' }}>
            <Button type="submit" variant="primary" size="medium">
              작성하기
            </Button>
            <Button variant="gray" size="medium" onClick={handleNavigate}>
              돌아가기
            </Button>
          </S.ButtonWrapper>
        </S.Form>
      </Container>
    </div>
  );
};

export default RequestWrite;
