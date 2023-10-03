import { solveStatusProp } from 'types/problem';
import { RiCloseFill } from 'react-icons/ri';
import { RiCheckFill } from 'react-icons/ri';

const SolveStatus = ({ status }: solveStatusProp) => {
  if (status === 0) {
    return <span></span>;
  }
  if (status === 1) {
    return (
      <span className="success">
        <RiCheckFill size={25} />
      </span>
    );
  }
  if (status === 2) {
    return (
      <span className="failed">
        <RiCloseFill size={25} />
      </span>
    );
  }
  return null;
};

export default SolveStatus;
