import { useNavigate, useParams } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { RequestNoticeDetail } from 'types/api';
import * as S from './style';
import ContentContainer from 'components/commons/ContentContainer';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import useGetNoticeDetail from 'hooks/@query/board/useGetNoticeDetail';
import NoticeDetail from 'components/unit/NoticeDetail';
import Comment from 'components/commons/Comment';

const NoticeRequestDetail = () => {
  const { Id } = useParams();
  const navigate = useNavigate();

  const request = useGetNoticeDetail(Id);
  const { handleSubmit } = useForm<FieldValues>();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <ContentContainer>
      <ContentBodyWrapper>
        <NoticeDetail request={request as RequestNoticeDetail} />
        <S.ButtonWrapper></S.ButtonWrapper>
        <Comment />
      </ContentBodyWrapper>
    </ContentContainer>
  );
};

export default NoticeRequestDetail;
