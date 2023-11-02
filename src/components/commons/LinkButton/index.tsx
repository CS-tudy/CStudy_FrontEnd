import { LinkButtonComponent } from 'types/button';
import * as S from './style';

function LinkButton({
  to,
  variant,
  size,
  children,
  ...rest
}: LinkButtonComponent) {
  return (
    <S.LinkButton to={to} variant={variant} size={size} {...rest}>
      {children}
    </S.LinkButton>
  );
}
export default LinkButton;
