import { useAddCommentList } from 'hooks/@query/comment/useCreateComment';
import * as S from 'components/commons/Comment/OptionaddComment/style';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'components/commons/Button/Style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stroe';
import { isLogin } from 'repository/auth';
import Toast from 'libs/Toast';
import { Logintoggle } from 'hooks/@redux/loginModalSlice';
interface AddCommentFormProps {
  parentId?: string | null;
}
const AddCommentForm = ({ parentId }: AddCommentFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();

  const pageNumber = useSelector(
    (state: RootState) => state.rootReducer.comment.pageNumber,
  );
  const dispatch = useDispatch();
  const { mutate: addComment } = useAddCommentList();
  const onSubmit: SubmitHandler<FieldValues> = async FormData => {
    if (!isLogin()) return dispatch(Logintoggle());

    const { content } = FormData;
    const noticeId = pageNumber;
    const parentCommentId = parentId || null;
    let formData;
    // 부모 댓글이 없는 경우
    if (parentId === null) formData = { noticeId, content };
    // 부모 댓글이 있는 경우
    else formData = { noticeId, content, parentCommentId };

    addComment({ formData });
    reset();
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
