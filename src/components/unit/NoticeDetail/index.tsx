import { RequestNoticeDetail } from 'types/api';
import * as S from './style';
import FormattedDate from 'components/commons/moment';
import ContentContainer from 'components/commons/ContentContainer';
import Container from 'components/commons/Container';
import Comment from 'components/commons/Comment';

interface NoticeDetailProps {
  request: RequestNoticeDetail;
}

const NoticeDetail = ({ request }: NoticeDetailProps) => {
  return (
    <>
      <ContentContainer>
        <Container>
          <S.Container>
            <S.Title>{request?.title}</S.Title>
            <S.Detail>
              <FormattedDate
                date={request?.createdDate}
                format="YYYY-MM-DD HH:mm"
              />
            </S.Detail>
            <S.Content
              dangerouslySetInnerHTML={{ __html: String(request?.content) }}
            />
          </S.Container>
        </Container>
        <S.CommentWrapper>
          <Comment />
        </S.CommentWrapper>
      </ContentContainer>
    </>
  );
};

export default NoticeDetail;
