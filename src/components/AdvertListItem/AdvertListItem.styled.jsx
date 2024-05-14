import styled from '@emotion/styled';

export const Item = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
  padding: 24px;
  width: 280px;
  /* height: 358px; */
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media only screen and (min-width: 768px) {
    width: 700px;
  }
  @media only screen and (min-width: 1440px) {
    width: 888px;
    flex-direction: row;
  }
`;
export const PrePhoto = styled.div`
  border-radius: 10px;
  min-width: 230px;
  height: 250px;
  background-image: url(${(props) => props.gallery});
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 768px) {
    min-width: 290px;
    height: 310px;
  }
`;

export const PreInfo = styled.div`
  width: 100%;
`;

export const PreHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Name = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`;
export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export const Price = styled.span`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  color: var(--main);
`;
export const Favorite = styled.div``;
export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 16px;
`;
export const TextItem = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main);
`;
export const TextItemLoc = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--main);
`;
export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DescriptionBox = styled.div`
  width: 280px;
  margin-top: 24px;
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;
export const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 240px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text);
  @media only screen and (min-width: 768px) {
    width: 650px;
  }
  @media only screen and (min-width: 1440px) {
    width: 520px;
  }
`;

export const Details = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '16px'};
  height: ${(props) => props.size || '16px'};
  stroke-width: 2.3px;
  stroke: ${(props) => props.color || '#101828'};
  fill: ${(props) => props.color || '#ffffff'};
`;
export const IconWrapperFavorite = styled.svg`
  width: ${(props) => props.size || '16px'};
  height: ${(props) => props.size || '16px'};
  stroke-width: 2.3px;
  stroke: ${(props) => props.color || '#101828'};
  fill: ${(props) => props.color || '#ffffff'};
`;

export const Button = styled.button`
  margin-top: 24px;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  background: var(--button);
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #fff;

  &:hover {
    background: #d84343;
  }
`;
