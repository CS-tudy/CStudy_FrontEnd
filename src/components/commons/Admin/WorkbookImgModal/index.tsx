import { useState } from 'react';
import workbook from 'assets/workbook.png';
import { AiOutlineClose } from 'react-icons/ai';
import useGetWorkbookList from 'hooks/@query/workbook/useGetWorkbookList';
import { useUploadImgWorkbook } from 'hooks/@query/workbook/useUploadWorkbook';
import * as S from './style';

interface handleIsModalProps {
  handleIsModal: (isModalOpen: boolean) => void;
}

const WorkbookImageUpload = ({ handleIsModal }: handleIsModalProps) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
    setPreviewUrl(URL.createObjectURL(e.target.files[0])); // 생성된 URL로 미리보기 이미지 설정
  };

  const workbookList = useGetWorkbookList({ title: '', description: '' });
  const workbookImgUpload = useUploadImgWorkbook({ handleIsModal });
  console.log(workbookList);

  const handleUpload = () => {
    if (!selectedFile) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    const lastWorkbook = workbookList?.content.length;
    const id = lastWorkbook ? lastWorkbook + 1 : null;
    console.log(id);

    workbookImgUpload({ id, formData });
  };

  return (
    <S.Backdrop>
      <S.Container>
        <S.XButton onClick={() => handleIsModal(false)}>
          <AiOutlineClose size={20} />
        </S.XButton>
        <S.FileInput type="file" onChange={handleFileChange} />
        <S.PreviewImage
          src={previewUrl ? previewUrl : workbook}
          alt="Preview"
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
        <button onClick={handleUpload} disabled={!selectedFile || uploading}>
          Upload Image
        </button>
      </S.Container>
    </S.Backdrop>
  );
};

export default WorkbookImageUpload;
