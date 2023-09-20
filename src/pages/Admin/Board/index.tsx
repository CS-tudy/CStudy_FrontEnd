import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';

import ContentContainer from 'components/commons/ContentContainer';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import { FormBody } from 'components/commons/Admin/FormBody/style';
import { Button } from 'components/commons/Button/Style';
import FormSection from 'components/commons/Admin/FormSection';
import AdminInput from 'components/commons/Admin/AdminInput';
import { useAddBoardList } from 'hooks/@query/board/useCreateBoard';
import { AddboardListForm } from 'types/api';

const CreateBoard = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      boardTitle: '',
      boardcontent: '',
    },
  });
  const { mutate: addboard } = useAddBoardList();

  const onSubmit: SubmitHandler<FieldValues> = async formData => {
    addboard({ ...formData });
    console.log('test');
  };

  return (
    <ContentContainer>
      <ContentBodyWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormBody>
            <FormSection title="공지사항 제목 설정해 주세요">
              <AdminInput
                id="boardTitle"
                type="text"
                name="boardTitle"
                label="공지사항 타이틀"
                register={register}
                errors={errors}
                required
              />
            </FormSection>
            <FormSection title="공지사항 내용을 입력해주세요">
              <AdminInput
                id="boardcontent"
                type="textarea"
                name="boardcontent"
                label="공지사항 내용"
                register={register}
                errors={errors}
                required
              />
            </FormSection>
            <Button type="submit" variant="primary" size="medium">
              등록
            </Button>
            <Button
              type="button"
              variant="primary"
              size="medium"
              onClick={() => navigate(-1)}
            >
              취소
            </Button>
          </FormBody>
        </form>
      </ContentBodyWrapper>
    </ContentContainer>
  );
};

export default CreateBoard;
