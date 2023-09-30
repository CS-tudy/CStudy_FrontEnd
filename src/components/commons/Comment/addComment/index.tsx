import { useAddCommentList } from 'hooks/@query/comment/useCreateComment';
import * as S from './style';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'components/commons/Button/Style';
import { useSelector } from 'react-redux';
interface AddCommentFormProps {
  parentId?: string | null;
}
const AddCommentForm = ({ parentId }: AddCommentFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>();

  const pageNumber = useSelector(
    (state: any) => state.rootReducer.commentdepth.pageNumber,
  );
  console.log(parentId);

  const { mutate: addComment } = useAddCommentList();
  const onSubmit: SubmitHandler<FieldValues> = async FormData => {
    const { content } = FormData;
    const noticeId = pageNumber;
    const parentCommentId = parentId || null;

    if (parentId === null) {
      // 부모 댓글이 없는 경우
      const formData = {
        noticeId,
        content,
      };
      addComment({ formData });
    } else {
      // 부모 댓글이 있는 경우
      const formData = {
        noticeId,
        content,
        parentCommentId,
      };
      addComment({ formData });
    }
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.CommentTextArea
          rows={5}
          placeholder="댓글을 입력해주세요."
          {...register('content', {
            required: '댓글을 입력해주세요.',
          })}
        />
        <S.BtnWrapper>
          <Button type="submit" variant="primary" size="medium">
            등록
          </Button>
          <input type="hidden" {...register('parentId')} value="" />
        </S.BtnWrapper>
      </S.Form>
    </>
  );
};

export default AddCommentForm;
