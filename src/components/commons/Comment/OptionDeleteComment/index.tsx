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

  const renderDeleteButton = () => {
    if (memberId === userMemberId || isAdmin()) {
      console.log('흠', userMemberId);
      console.log(userMemberId);

      return <button onClick={handleSubmit(onSubmit)}>삭제</button>;
    }
    return null;
  };

  return <>{renderDeleteButton()}</>;
};

export default DeleteComment;
