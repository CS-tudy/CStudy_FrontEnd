import { getCommentList } from '../../../api/comment';
import { useQuery } from '@tanstack/react-query';

const useGetCommentList = (id: string | undefined) => {
  const { data: request } = useQuery(['CommentList', { id }], () =>
    getCommentList(id),
  );
  return request;
};

export default useGetCommentList;
