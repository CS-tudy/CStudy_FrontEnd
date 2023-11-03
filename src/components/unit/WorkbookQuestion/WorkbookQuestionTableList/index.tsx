import { memo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { TBodyTd } from 'components/commons/Table/style';
import { WorkbookQuestionContent } from 'types/api';
import { Link } from 'react-router-dom';
import AdminInput from 'components/commons/Admin/AdminInput';
import { isAdmin } from 'repository/auth';

interface WorkbookQuestionTableListProps {
  content: WorkbookQuestionContent;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const WorkbookQuestionTableList = ({
  content,
  register,
  errors,
}: WorkbookQuestionTableListProps) => {
  const { questionId, title } = content;

  return (
    <tr>
      <TBodyTd>{questionId}</TBodyTd>
      <TBodyTd className="bold">
        <Link to={`/problem/${questionId}`}>{title}</Link>
      </TBodyTd>
      {isAdmin() && (
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
      )}
    </tr>
  );
};

export default memo(WorkbookQuestionTableList);
