import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { WorkbookQuestionContent } from 'types/api';
import WorkbookQuestionTableList from '../WorkbookQuestionTableList';

interface WorkbookQuestionTableListsProps {
  workbookContent: WorkbookQuestionContent[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const WorkbookQuestionTableLists = ({
  workbookContent,
  register,
  errors,
}: WorkbookQuestionTableListsProps) => {
  return (
    <>
      {workbookContent?.map(content => (
        <WorkbookQuestionTableList
          key={content.questionId}
          content={content}
          register={register}
          errors={errors}
        />
      ))}
    </>
  );
};

export default WorkbookQuestionTableLists;
