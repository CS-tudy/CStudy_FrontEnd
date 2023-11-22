import { useEffect, useRef } from 'react';
import * as S from './style';

interface TextEditorProps {
  id?: string;
  label?: string;
  onChange: (value: string) => void;
  isRequest: boolean;
  defaultValue: string;
}

const TextEditor = ({
  id,
  label,
  onChange,
  isRequest,
  defaultValue,
}: TextEditorProps) => {
  const quillRef = useRef<any>();

  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.getEditor().setText(defaultValue || '');
    }
  }, [defaultValue]);

  return (
    <S.Field>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.StyledQuill
        className="myQuill"
        id={id}
        label={label}
        onChange={onChange}
        isRequest={isRequest}
        ref={quillRef}
      />
    </S.Field>
  );
};

export default TextEditor;
