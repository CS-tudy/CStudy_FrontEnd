import { useNavigate, useParams } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { RequestNoticeDetail } from 'types/api';
import useGetNoticeDetail from 'hooks/@query/board/useGetNoticeDetail';
import NoticeDetail from 'components/unit/NoticeDetail';

const NoticeRequestDetail = () => {
  const { Id } = useParams();

  const request = useGetNoticeDetail(Id);

  return <NoticeDetail request={request as RequestNoticeDetail} />;
};

export default NoticeRequestDetail;
