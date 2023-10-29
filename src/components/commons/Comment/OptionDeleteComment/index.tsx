import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDeleteCommentList } from 'hooks/@query/comment/useDeleteComment';
import { isAdmin, userInfo } from 'repository/auth';

interface DeleteCommentProps {
  memberId?: string;
  commentId?: string | null;
}
const DeleteComment = ({ memberId, commentId }: DeleteCommentProps) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});

  const userMemberId = userInfo()?.memberId;
  const { mutate: deleteComment } = useDeleteCommentList();
  const onSubmit: SubmitHandler<FieldValues> = () => {
    deleteComment({ commentId });
  };

  return (
    <>
      {(memberId === userMemberId || isAdmin()) && (
        <button onClick={handleSubmit(onSubmit)}>삭제</button>
      )}
    </>
  );
};

export default DeleteComment;
