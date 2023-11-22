import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

import ContentContainer from 'components/commons/ContentContainer';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import { FormBody } from 'components/commons/Admin/FormBody/style';
import { Button } from 'components/commons/Button/Style';
import FormSection from 'components/commons/Admin/FormSection';
import AdminInput from 'components/commons/Admin/AdminInput';
import { useAddNoticeList } from 'hooks/@query/board/useCreateNotice';
import AdminContainer from '../AdminContainer';
import { isAdmin } from 'repository/auth';
import TextEditor from 'components/commons/TextEditor';

const CreateNotice = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const { mutate: addboard } = useAddNoticeList();

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

  const onSubmit: SubmitHandler<FieldValues> = async formData => {
    addboard({ ...formData });
  };

  return (
    <>
      {isAdmin() ? (
        <AdminContainer>
          <ContentBodyWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormBody>
                <FormSection title="공지사항 제목 설정해 주세요">
                  <AdminInput
                    id="title"
                    type="text"
                    name="title"
                    label="공지사항 타이틀"
                    register={register}
                    errors={errors}
                    required
                    placeholder="공지사항 제목 입력해주세요"
                  />
                </FormSection>
                <FormSection title="공지사항 내용을 입력해주세요">
                  {/* <AdminInput
                    id="content"
                    type="textarea"
                    name="content"
                    label="공지사항 내용"
                    register={register}
                    errors={errors}
                    required
                    placeholder="공지사항 내용 입력해주세요"
                  /> */}
                  <TextEditor
                    id="content"
                    label="공지사항 내용"
                    onChange={handleChange}
                    isRequest={false}
                    // defaultValue={
                    //   extractText(data?.description) === 'undefined'
                    //     ? ''
                    //     : extractText(data?.description)
                    // }
                  />
                </FormSection>
                <Button type="submit" variant="primary" size="medium">
                  등록
                </Button>
                <Button
                  type="button"
                  variant="gray"
                  size="medium"
                  onClick={() => navigate(-1)}
                >
                  취소
                </Button>
              </FormBody>
            </form>
          </ContentBodyWrapper>
        </AdminContainer>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default CreateNotice;
