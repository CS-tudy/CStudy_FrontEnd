import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDeleteCommentList } from 'hooks/@query/comment/useDeleteComment';
import { isAdmin, userInfo } from 'repository/auth';
import { AiFillDelete } from 'react-icons/ai';

interface DeleteCommentProps {
  currentDepth: number;
  memberId?: string;
  commentId?: string | null;
}
const DeleteComment = ({
  currentDepth,
  memberId,
  commentId,
}: DeleteCommentProps) => {
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
    if (currentDepth === 0 && (memberId === userMemberId || isAdmin())) {
      return (
        <button onClick={handleSubmit(onSubmit)}>
          <AiFillDelete size={30} color="#aaa" />
        </button>
      );
    }
    return null;
  };

  return <>{renderDeleteButton()}</>;
};

export default DeleteComment;
