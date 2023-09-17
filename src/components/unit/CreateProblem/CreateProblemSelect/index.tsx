import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CreateProblemSelectProp {
  register: UseFormRegister<FieldValues>;
  name: string;
}

const CreateProblemSelect = ({ register, name }: CreateProblemSelectProp) => {
  return (
    <>
      <label htmlFor="category">카테고리</label>
      <select id="category" {...register(name)}>
        <option value="네트워크">네트워크</option>
        <option value="자바">자바</option>
        <option value="운영체제">운영체제</option>
        <option value="데이터베이스">데이터베이스</option>
        <option value="일반CS">일반 CS</option>
      </select>
    </>
  );
};

export default CreateProblemSelect;
