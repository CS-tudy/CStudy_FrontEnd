import AdminInput from 'components/commons/Admin/AdminInput';
import { TBodyTd } from 'components/commons/Table/style';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ProblemContent } from 'types/api';

interface AdminContestTableListProps {
  problem: ProblemContent;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const AdminContestTableList = ({
  problem,
  register,
  errors,
}: AdminContestTableListProps) => {
  const { questionId, questionTitle } = problem;
  return (
    <tr>
      <TBodyTd $white>{questionId}</TBodyTd>
      <TBodyTd $white>{questionTitle}</TBodyTd>
      <TBodyTd $white>
        <AdminInput
          type="checkbox"
          name="questionIds"
          register={register}
          errors={errors}
          value={`${questionId}`}
          required
        />
      </TBodyTd>
    </tr>
  );
};

export default AdminContestTableList;
