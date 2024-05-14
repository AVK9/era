import { Wrapper, CatBtn, TextItem } from './Category.styled';
import { IconButton } from '../IconButton';

export const Category = ({ details }) => {
  return (
    <Wrapper>
      {details &&
        Object.keys(details).map((key) =>
          details[key] === 0 ? (
            ''
          ) : (
            <CatBtn key={key}>
              <IconButton icon={key} />
              {details[key] === 1 ? '' : details[key]}
              <TextItem>{key}</TextItem>
            </CatBtn>
          )
        )}
    </Wrapper>
  );
};
