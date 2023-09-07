import { ButtonComponent } from 'types/button';
import * as S from './Style';

function Button({ variant, size, children, ...rest }: ButtonComponent) {
  return (
    <S.Button variant={variant} size={size} {...rest}>
      {children}
    </S.Button>
  );
}
export default Button;
