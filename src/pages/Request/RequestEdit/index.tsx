import useGetRequest from 'hooks/@query/request/useGetRequest';
import RequestWrite from 'pages/RequestWrite';
import { useParams } from 'react-router-dom';

const RequestEdit = () => {
  const { id } = useParams();
  const request = useGetRequest(id);

  return <RequestWrite isEdit={true} data={request} />;
};

export default RequestEdit;
