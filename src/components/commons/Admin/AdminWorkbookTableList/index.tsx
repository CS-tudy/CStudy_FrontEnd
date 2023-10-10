import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ProblemContent } from 'types/api';
import AdminInput from '../AdminInput';
import { TBodyTd } from 'components/commons/Table/style';

interface AdminWorkbookTableListProps {
  problem: ProblemContent;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const AdminWorkbookTableList = ({
  problem,
  register,
  errors,
}: AdminWorkbookTableListProps) => {
  const { questionId, questionTitle, categoryTitle } = problem;
  return (
    <tr>
      <TBodyTd>
        <AdminInput
          type="checkbox"
          name="questionIds"
          register={register}
          errors={errors}
          value={`${questionId}`}
          required
        />
      </TBodyTd>
      <TBodyTd>{questionTitle}</TBodyTd>
      <TBodyTd white>{categoryTitle}</TBodyTd>
    </tr>
  );
};

export default AdminWorkbookTableList;
