import * as S from './style';

interface TextEditorProps {
  id?: string;
  label?: string;
  onChange: (value: string) => void;
  isRequest: boolean;
}

const TextEditor = ({ id, label, onChange, isRequest }: TextEditorProps) => {
  return (
    <S.Field>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.StyledQuill
        className="myQuill"
        id={id}
        label={label}
        onChange={onChange}
        isRequest={isRequest}
      />
    </S.Field>
  );
};

export default TextEditor;
