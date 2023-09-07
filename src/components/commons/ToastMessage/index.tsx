import { Message } from 'libs/Toast';

// import { AiFillCheckCircle } from '@react-icons/all-files/ai/AiFillCheckCircle';
// import { BiError } from '@react-icons/all-files/bi/BiError';

import * as Styled from './style';

interface ToastMessageProps {
  messages: Message[];
}

const ToastMessage = ({ messages }: ToastMessageProps) => {
  //   const getIcon = (type: string) => {
  //     if (type === 'success')
  //       return <AiFillCheckCircle size={20} color="white" />;
  //     if (type === 'error') return <BiError size={20} color="white" />;
  //   };

  return (
    <>
      {messages?.map(({ id, message, type }) => (
        <Styled.ToastContainer key={id} type={type}>
          {/* <Styled.ToastIconContainer>{getIcon(type)}</Styled.ToastIconContainer> */}
          <Styled.ToastMessage>{message}</Styled.ToastMessage>
        </Styled.ToastContainer>
      ))}
    </>
  );
};

export default ToastMessage;
