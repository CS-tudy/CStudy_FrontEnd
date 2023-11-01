import { useState, memo } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormReset,
} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { isAdmin } from 'repository/auth';
import { useDeleteContestProblem } from 'hooks/@query/contest/useDeleteContestProblem';
import Button from 'components/commons/Button/Button';
import LinkButton from 'components/commons/LinkButton';

interface AdminContestQuestionOptionGroupProps {
  contestId: string;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  reset: UseFormReset<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

const AdminContestQuestionOptionGroup = ({
  contestId,
  handleSubmit,
  reset,
  getValues,
}: AdminContestQuestionOptionGroupProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };
  const DeleteContestProblem = useDeleteContestProblem({ handleIsLoading });

  const onSubmit: SubmitHandler<FieldValues> = () => {
    const form = getValues();

    DeleteContestProblem(form);
    reset();
  };
  return (
    <>
      {isAdmin() && (
        <>
          <LinkButton
            variant="primary"
            size="lagry"
            to={`/admin/${contestId}/contestproblem`}
          >
            문제 추가하기
          </LinkButton>
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
            variant="primary"
            size="largy"
          >
            문제 삭제하기
          </Button>
        </>
      )}
    </>
  );
};

export default AdminContestQuestionOptionGroup;
