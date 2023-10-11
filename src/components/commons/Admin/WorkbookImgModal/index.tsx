import { useState } from 'react';
import axios from 'axios';
import useGetWorkbookList from 'hooks/@query/workbook/useGetWorkbookList';

const WorkbookImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };
  const workbookList = useGetWorkbookList({ title: '', description: '' });
  console.log(workbookList);
  const lastWorkbook = workbookList?.content[workbookList?.content.length - 1];
  const newId = lastWorkbook ? lastWorkbook.id + 1 : 1;
  console.log(newId);

  const handleUpload = () => {
    if (!selectedFile) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile || uploading}>
        Upload Image
      </button>
    </div>
  );
};

export default WorkbookImageUpload;
