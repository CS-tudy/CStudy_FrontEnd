import { useAddCommentList } from 'hooks/@query/comment/useCreateComment';
import * as S from './style';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'components/commons/Button/Style';
import { useSelector } from 'react-redux';
import { useDeleteCommentList } from 'hooks/@query/comment/useDeleteComment';
import { MouseEvent } from 'react';
import useReplyButton from 'hooks/Comment/useReplyButton';

interface DeleteCommentProps {
  commentId?: string | null;
}
const DeleteComment = ({ commentId }: DeleteCommentProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({});

  const { mutate: deleteComment } = useDeleteCommentList();

  const onSubmit: SubmitHandler<FieldValues> = () => {
    deleteComment({ commentId });
  };

  return (
    <>
      <button onClick={handleSubmit(onSubmit)}>삭제</button>
    </>
  );
};

export default DeleteComment;
