import { useQuery } from '@tanstack/react-query';
import { ImgDownload } from 'api/mypage';

export const useGetImg = () => {
  const { data: url } = useQuery(['getImg'], () => ImgDownload());

  return url;
};
