import { Message } from 'libs/Toast';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';

import * as S from './style';

interface ToastMessageProps {
  messages: Message[];
}

const ToastMessage = ({ messages }: ToastMessageProps) => {
  const getIcon = (type: string) => {
    if (type === 'success')
      return <AiFillCheckCircle size={20} color="white" />;
    if (type === 'error') return <BiError size={20} color="white" />;
  };

  return (
    <>
      {messages?.map(({ id, message, type }) => (
        <S.ToastContainer key={id} type={type}>
          <S.ToastIconContainer>{getIcon(type)}</S.ToastIconContainer>
          <S.ToastMessage>{message}</S.ToastMessage>
        </S.ToastContainer>
      ))}
    </>
  );
};

export default ToastMessage;
