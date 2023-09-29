import { useAddCommentList } from 'hooks/@query/comment/useCreateComment';
import * as S from './style';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'components/commons/Button/Style';

const AddCommentForm = ({ id }: any) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>();

  const { mutate: addComment } = useAddCommentList();

  const onSubmit: SubmitHandler<FieldValues> = async FormData => {
    const { content } = FormData;
    const noticeId = id;

    addComment({ noticeId, content });
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          type="text"
          placeholder="댓글을 입력해주세요."
          {...register('content', {
            required: '이메일을 입력해주세요.',
          })}
        />
        <Button type="submit" variant="primary" size="medium">
          등록
        </Button>
      </S.Form>
    </>
  );
};

export default AddCommentForm;
