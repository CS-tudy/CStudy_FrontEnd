import { useState } from 'react';

const useProblemAction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isAction, setIsAction] = useState(false);
  const [timeCheck, setTimeCheck] = useState(false);

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const handleIsAnswer = (isAnswer: boolean) => {
    setIsAnswer(isAnswer);
  };

  const actionAnimations = (isActions: boolean) => {
    setIsAction(isActions);
  };

  const animationTimeCheck = (time: boolean) => {
    setTimeCheck(time);
  };

  return {
    isLoading,
    isAnswer,
    isAction,
    timeCheck,
    handleIsLoading,
    handleIsAnswer,
    actionAnimations,
    animationTimeCheck,
  };
};

export default useProblemAction;
