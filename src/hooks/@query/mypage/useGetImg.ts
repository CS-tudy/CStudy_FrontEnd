import { useQuery } from '@tanstack/react-query';
import { ImgDownload } from 'api/mypage';

export const useGetImg = () => {
  const { data: url } = useQuery(['getImg'], () => ImgDownload());

  const blob = new Blob([url], { type: 'mime-type' });
  const img = URL.createObjectURL(blob);
  return img;
};
