import Container from 'components/commons/Container';
import ProblemDetail from 'components/unit/Problem/ProblemDetail';
import useProblemAction from 'hooks/ProblemDetail/useProblemAction';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useGetProblem } from 'hooks/@query/problem/useGetProblem';
import { LoginUserDto, selectAnswerProblemFromProps } from 'types/problem';
import { IProblem } from 'types/api';
import { userInfo } from 'repository/auth';
import ProblemDetailFooter from 'components/unit/Problem/ProblemDetailFooter';
import { useSelectAnswerProblem } from 'hooks/@query/problem/useSelectAnswerProblem';
import ContentContainer from 'components/commons/ContentContainer';

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
    setIsToastShown,
    isToastShown,
  } = useProblemAction();

  const problem = useGetProblem(problemId as string);

  let count = 0;
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      count += 1;
      setTime(count);
    }, 1000);

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
    const loginUserDto = {
      ...(userInfo() as LoginUserDto),
    };

    const formData = {
      ...choiceNumber,
      loginUserDto: loginUserDto,
      time: time,
    };

    setAnswer(FormData.choiceNumber);
    selectAnswerProblem({
      problemId,
      formData,
    } as selectAnswerProblemFromProps);
  };

  return (
    <ContentContainer>
      <Container>
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
          time={time}
        ></ProblemDetail>
        {isAnswer ? (
          <ProblemDetailFooter explain={problem?.explain as string} />
        ) : (
          <></>
        )}
      </Container>
    </ContentContainer>
  );
};

export default ProblemDetailPage;
