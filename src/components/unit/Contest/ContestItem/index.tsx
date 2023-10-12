import StyleLink from 'components/commons/StyleLink';
import { TBodyTd } from 'components/commons/Table/style';

const ContestItem = () => {
  return (
    <tr>
      <TBodyTd>
        <StyleLink to="1">자바 대회</StyleLink>
      </TBodyTd>
      <TBodyTd>100</TBodyTd>
      <TBodyTd>2023-05-15 ~ 2024-05-14</TBodyTd>
    </tr>
  );
};

export default ContestItem;
