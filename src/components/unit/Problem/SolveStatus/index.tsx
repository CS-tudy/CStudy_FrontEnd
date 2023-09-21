import { solveStatusProp } from 'types/problem';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const SolveStatus = ({ status }: solveStatusProp) => {
  if (status === 1) {
    return (
      <span className="success">
        <AiOutlineCheck />
      </span>
    );
  }
  if (status === 2) {
    return (
      <span className="failed">
        <AiOutlineClose />
      </span>
    );
  }
  return null;
};

export default SolveStatus;
