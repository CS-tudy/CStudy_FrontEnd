import resultSuccess_Webp from 'assets/result_stamp/result-success.webp';
import resultSuccess_Png from 'assets/result_stamp/result-success.png';
import resultFail_Webp from 'assets/result_stamp/result-fail.webp';
import resultFail_Png from 'assets/result_stamp/result-fail.png';
import * as Styled from './style';

interface ResultImageProps {
  isAnswer?: boolean;
  isAction?: boolean;
  timeCheck?: boolean;
}

const ResultImage = ({ isAnswer, isAction, timeCheck }: ResultImageProps) => {
  return (
    <>
      {timeCheck && (
        <Styled.ResultStampWrapper>
          {isAnswer ? (
            <picture>
              <source srcSet={resultSuccess_Webp} type="image/webp" />
              <source srcSet={resultSuccess_Png} type="image/jpg" />
              <Styled.Image
                isAction={isAction}
                src={resultSuccess_Png}
                alt="성공 도장"
              />
            </picture>
          ) : (
            <picture>
              <source srcSet={resultFail_Webp} type="image/webp" />
              <source srcSet={resultFail_Png} type="image/jpg" />
              <Styled.Image
                isAction={isAction}
                src={resultFail_Png}
                alt="실패 도장"
              />
            </picture>
          )}
        </Styled.ResultStampWrapper>
      )}
    </>
  );
};

export default ResultImage;
