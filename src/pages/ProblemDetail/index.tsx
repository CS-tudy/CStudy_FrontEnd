import Button from 'components/commons/Button/Button';
import Container from 'components/commons/Container';
import ProblemDetail from 'components/unit/Problem/ProblemDetail';
import useProblemAction from 'hooks/ProblemDetail/useProblemAction';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { selectAnswerProblem } from 'api/problem';
import { useGetProblem } from 'hooks/@query/problem/useGetProblem';
import { LoginUserDto, selectAnswerProblemFromProps } from 'types/problem';
import { UTIL } from 'constants/Util';
import { IProblem } from 'types/api';
import { userInfo } from 'repository/auth';
import { RxLapTimer } from 'react-icons/rx';
import ProblemDetailFooter from 'components/unit/Problem/ProblemDetailFooter';
import { useSelectAnswerProblem } from 'hooks/@query/problem/useSelectAnswerProblem';

const ProblemDetailPage = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState<null | number>(null);
  const [Answer, setAnswer] = useState('');
  const handleNavigateBack = () => {
    navigate(-1);
  };
  const {
    isLoading,
    isAnswer,
    isAction,
    timeCheck,
    handleIsLoading,
    handleIsAnswer,
    actionAnimations,
    animationTimeCheck,
  } = useProblemAction();

  const problem = useGetProblem(problemId as string);

  let count = 0;
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      count += 1;
      setTime(count);
    }, 1000);

    // Component unmount 시점 혹은 dependency 변경 시점에 interval 정리
    return () => clearInterval(timer);
  }, []);

  const { register, handleSubmit } = useForm<FieldValues>();

  const selectAnswerProblem = useSelectAnswerProblem({
    handleIsLoading,
    handleIsAnswer,
    actionAnimations,
  });

  const onSubmit: SubmitHandler<FieldValues> = FormData => {
    const choiceNumber = { choiceNumber: parseInt(FormData.choiceNumber) };
    // const currentTime = new Date().getTime();
    // const elapsedTime = currentTime - (startTime as number);
    const loginUserDto = {
      ...(userInfo() as LoginUserDto),
    };

    const formData = {
      ...choiceNumber,
      loginUserDto: loginUserDto,
      // time: Math.floor(elapsedTime / UTIL.SECOND),
      time: time,
    };

    console.log(formData);

    setAnswer(FormData.choiceNumber);
    selectAnswerProblem({
      problemId,
      formData,
    } as selectAnswerProblemFromProps);
  };

  return (
    <Container>
      <div>
        {/* <Button variant="gray" size="medium" onClick={handleNavigateBack}>
          돌아가기
        </Button> */}
      </div>
      <div>
        <RxLapTimer size={20} /> {time}
      </div>
      <ProblemDetail
        isLoading={isLoading}
        problem={problem as IProblem}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        Answer={Answer}
        isAnswer={isAnswer}
        isAction={isAction}
        timeCheck={timeCheck}
      ></ProblemDetail>
      {/* {isAction && isAnswer ? <div>정답</div> : <div>오답</div>} */}
      {isAnswer && <ProblemDetailFooter explain={problem?.explain as string} />}
    </Container>
  );
};

export default ProblemDetailPage;
