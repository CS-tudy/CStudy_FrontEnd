import { memo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ProblemContent } from 'types/api';
import AdminWorkbookTableList from '../AdminWorkbookTableList';

interface AdminWorkbookTableListsProps {
  filterQuestion: ProblemContent[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const AdminWorkbookTableLists = ({
  filterQuestion,
  register,
  errors,
}: AdminWorkbookTableListsProps) => {
  return (
    <>
      {filterQuestion?.map(problem => (
        <AdminWorkbookTableList
          key={problem.questionId}
          problem={problem}
          register={register}
          errors={errors}
        />
      ))}
    </>
  );
};

export default memo(AdminWorkbookTableLists);
