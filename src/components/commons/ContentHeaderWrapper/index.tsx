import { PropsWithChildren, useState, useCallback, memo } from 'react';
import { useParams } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import StyleLink from '../StyleLink';
import * as S from './style';
import { isAdmin } from 'repository/auth';
import { useUpdateWorkbook } from 'hooks/@query/workbook/useUpdateWorkbook';
import { Button } from '../Button/Style';

interface CreateContestProps {
  desc?: string;
  admin?: boolean;
  adminLink?: string;
  Text?: string;
}

const ContentHeaderWrapper = ({
  desc,
  admin,
  adminLink,
  children,
  Text,
}: PropsWithChildren<CreateContestProps>) => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { questionId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const handleIsLoading = useCallback((isLoading: boolean) => {
    setIsLoading(isLoading);
  }, []);

  const handleIsActive = useCallback((isActive: boolean) => {
    setIsActive(isActive);
  }, []);
  console.log('1');

  const UpdateWorkbook = useUpdateWorkbook({ handleIsLoading, handleIsActive });

  const onSubmit: SubmitHandler<FieldValues> = data => {
    data.id = questionId;
    UpdateWorkbook(data);
  };

  return (
    <S.Header>
      <div>
        {isAdmin() && admin && (
          <S.AdminWrapper>
            <Button
              type="button"
              onClick={() => setIsActive(active => !active)}
              variant="primary"
              size="mideum"
            >
              문제집 정보 수정
            </Button>
            {isActive && (
              <>
                <button
                  className="lg green style"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isLoading}
                >
                  수정하기
                </button>
                <button
                  className="lg revert"
                  onClick={() => setIsActive(false)}
                  disabled={isLoading}
                >
                  취소
                </button>
              </>
            )}
          </S.AdminWrapper>
        )}
        {isAdmin() && adminLink && (
          <StyleLink className="lg navy style" to={adminLink}>
            {Text}
          </StyleLink>
        )}

        {desc && (
          <S.Desc>
            {isActive ? (
              <Input
                id="description"
                defaultValue={desc}
                register={register}
                errors={errors}
                required
              />
            ) : (
              desc
            )}
          </S.Desc>
        )}
      </div>
      {children}
    </S.Header>
  );
};

export default memo(ContentHeaderWrapper);
