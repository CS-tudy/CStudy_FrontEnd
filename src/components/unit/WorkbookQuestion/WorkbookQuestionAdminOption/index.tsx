import { useState, memo } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormReset,
} from 'react-hook-form';
import { useWorkbookQuestionDelete } from 'hooks/@query/workbook/useWorkbookQuestionDelete';
import { Link } from 'react-router-dom';
import { isAdmin } from 'repository/auth';

interface WorkbookQuestionAdminOptionGroupProps {
  questionId: string;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  reset: UseFormReset<FieldValues>;
}

const WorkbookQuestionAdminOptionGroup = ({
  questionId,
  handleSubmit,
  reset,
}: WorkbookQuestionAdminOptionGroupProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const WorkbookQuestionDelete = useWorkbookQuestionDelete({ handleIsLoading });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    const isArray = Array.isArray(data.questionIds);
    const customQuestionIds = isArray
      ? data.questionIds?.map((questionId: (string | number)[]) => ({
          id: +questionId,
        }))
      : (data.questionIds = [{ id: +data.questionIds }]);

    const formData = {
      workbookId: parseInt(questionId as string),
      questionIds: customQuestionIds,
    };

    WorkbookQuestionDelete(formData);
    reset();
  };
  return (
    <>
      {isAdmin() && (
        <>
          <Link to="adminadd" className="navy xl style">
            문제 추가하기
          </Link>
          <button
            className="revert--red xl style"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            문제 삭제하기
          </button>
        </>
      )}
    </>
  );
};

export default WorkbookQuestionAdminOptionGroup;
