import { useState } from 'react';
import workbook from 'assets/workbook.png';
import { AiOutlineClose } from 'react-icons/ai';
import useGetWorkbookList from 'hooks/@query/workbook/useGetWorkbookList';
import { useUploadImgWorkbook } from 'hooks/@query/workbook/useUploadWorkbook';
import * as S from './style';
import Toast from 'libs/Toast';
import { Button } from 'components/commons/Button/Style';

interface handleIsModalProps {
  handleIsModal: (isModalOpen: boolean) => void;
}

const WorkbookImageUpload = ({ handleIsModal }: handleIsModalProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const workbookList = useGetWorkbookList({ title: '', description: '' });
  const workbookImgUpload = useUploadImgWorkbook({ handleIsModal });

  const handleUpload = () => {
    if (!selectedFile) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    const lastWorkbook = workbookList?.content[0].id;
    const id = lastWorkbook ? lastWorkbook : null;
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
        <Button
          onClick={handleUpload}
          variant="primary"
          size="mideum"
          disabled={!selectedFile || uploading}
        >
          문제집 이미지 업로드
        </Button>
      </S.Container>
    </S.Backdrop>
  );
};

export default WorkbookImageUpload;
