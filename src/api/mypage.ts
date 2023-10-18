import { instance } from 'api';
import { FieldValues } from 'react-hook-form';

export const getMyPage = () => {
  const response = instance.get('/api/member/member');
  return response;
};

// 비밀번호변경
export const PwdEdit = async (formData: FieldValues) => {
  const response = await instance.put('api/member/member', formData);

  return response.data;
};

// s3 버킷에 IAM 파일 업로드
export const ImgUpload = async (formData: FieldValues) => {
  const response = await instance.post(
    `api/member/upload?multipartFileList=`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};

// S3 버켓에서 사진 가져오기
export const ImgDownload = async () => {
  const response = await instance.get('api/member/download', {
    responseType: 'blob',
  });
  return response.data;
};

// 승인현황
export const ApprovalStatus = async () => {
  const response = await instance.get(`api/request/member`);
  return response.data;
};
