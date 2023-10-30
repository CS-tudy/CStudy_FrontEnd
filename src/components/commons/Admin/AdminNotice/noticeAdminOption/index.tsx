import { useDeleteNoticeList } from 'hooks/@query/board/useNoticeDelete';
import { useUpdateNoticeList } from 'hooks/@query/board/useNoticeUpdate';
import { useCallback } from 'react';
import * as S from './style';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Input from 'components/commons/Input';

interface AdminNoticeCardProps {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticeAdminOptionGroup = ({
  id,
  title,
  content,
  createdDate,
  isActive,
  setIsActive,
}: AdminNoticeCardProps) => {
  const {
    register,
    handleSubmit: handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: title,
      content: content,
    },
  });

  const handleIsActive = useCallback((isActive: boolean) => {
    setIsActive(isActive);
  }, []);

  const { mutate: deleteComment } = useDeleteNoticeList();
  const UpdateNotice = useUpdateNoticeList({ id, handleIsActive });

  const handleDelete = () => {
    console.log(id);

    deleteComment(id);
  };

  const onSubmit: SubmitHandler<FieldValues> = data => {
    const formData = {
      content: data.content,
      title: data.title,
    };

    UpdateNotice({ id, formData });
  };
  return (
    <>
      {isActive ? (
        <>
          <Input
            id="title"
            defaultValue={title}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="content"
            defaultValue={content}
            type="textarea"
            register={register}
            errors={errors}
            required
          />
        </>
      ) : (
        <>
          <S.Title>{title}</S.Title>
        </>
      )}
      {isActive ? (
        <>
          <S.Button onClick={handleSubmit(onSubmit)}>수정하기</S.Button>
          <S.Button onClick={() => setIsActive(false)}>취소</S.Button>
        </>
      ) : (
        <>
          <S.Button
            type="button"
            onClick={() => setIsActive((active: boolean) => !active)}
          >
            수정
          </S.Button>
          <S.Button onClick={handleDelete}>삭제</S.Button>
          <S.Detail>
            <p>{content}</p>·<span>{createdDate}</span>
          </S.Detail>
        </>
      )}
    </>
  );
};

export default NoticeAdminOptionGroup;
