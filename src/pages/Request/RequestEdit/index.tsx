import useGetRequest from 'hooks/@query/request/useGetRequest';
import RequestWrite from 'pages/RequestWrite';
import { useParams } from 'react-router-dom';

const RequestEdit = () => {
  const { requestId } = useParams();
  const request = useGetRequest(requestId);

  return <RequestWrite isEdit={true} data={request} />;
};

export default RequestEdit;
