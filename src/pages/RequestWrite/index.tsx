import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
// import { useCreateRequest } from 'hooks/@query/board/useCreateRequest';

// import Button from 'components/@shared/Button';
// import ContentContainer from 'components/@shared/ContentContainer';
// import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
// import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
// import Input from 'components/@shared/Input';
// import TextArea from 'components/@shared/TextArea';
import * as S from './style';
import Container from 'components/commons/Container';

const RequestWrite = () => {
  //   const navigate = useNavigate();

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<FieldValues>({
  //     defaultValues: {
  //       title: '',
  //       description: '',
  //     },
  //   });

  //   const handleNavigate = () => {
  //     navigate(-1);
  //   };

  //   const { mutate: createRequest } = useCreateRequest();

  //   const submitForm: SubmitHandler<FieldValues> = (FormData) => {
  //     createRequest(FormData);
  //   };

  return (
    <Container>
      <S.Form>
        {/* <form onSubmit={handleSubmit(submitForm)}> */}
        <input
          id="title"
          // label="게시판에 올릴 제목을 적어주세요"
          placeholder="제목을 입력해주세요"
          required
          // register={register}
          // errors={errors}
        />
        <textarea
          id="description"
          // label="게시판에 올릴 내용을 적어주세요"
          placeholder="내용을 적어주세요"
          required
          // register={register}
          // errors={errors}
        />
        <div>
          <button type="submit" className="xl wide navy style">
            등록하기
          </button>
          <button
            type="button"
            className="xl gray style"
            // onClick={handleNavigate}
          >
            돌아가기
          </button>
        </div>
        {/* </form> */}
      </S.Form>
    </Container>
  );
};

export default RequestWrite;
