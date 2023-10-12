import Container from 'components/commons/Container';
import MypageQuestion from 'components/unit/Mypage/MypageQuestion';
import { useGetReview } from 'hooks/@query/review/useGetReview';

const Review = () => {
  const review = useGetReview();
  console.log(review);
  return (
    <Container>
      <MypageQuestion />
    </Container>
  );
};

export default Review;
