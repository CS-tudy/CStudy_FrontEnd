import { useDeleteNoticeList } from 'hooks/@query/board/useNoticeDelete';
import { useUpdateNoticeList } from 'hooks/@query/board/useNoticeUpdate';
import { useCallback } from 'react';
import * as S from './style';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Input from 'components/commons/Input';
import TextEditor from 'components/commons/TextEditor';

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
    setValue,
    reset,
    trigger,
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

  const extractText = (htmlString: any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };

  const handleChange = (value: string) => {
    console.log(value);

    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };

  const handleDelete = () => {
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
          {/* <Input
            id="content"
            defaultValue={content}
            type="textarea"
            register={register}
            errors={errors}
            required
          /> */}
          <TextEditor
            id="content"
            onChange={handleChange}
            isRequest={true}
            defaultValue={
              extractText(content) === 'undefined' ? '' : extractText(content)
            }
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
            <p>{extractText(content)}</p>·<span>{createdDate}</span>
          </S.Detail>
        </>
      )}
    </>
  );
};

export default NoticeAdminOptionGroup;
