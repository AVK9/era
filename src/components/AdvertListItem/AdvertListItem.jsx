import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Item,
  PreHead,
  PreInfo,
  PrePhoto,
  Name,
  PriceBox,
  Price,
  Favorite,
  RatingBox,
  TextItem,
  Description,
  DescriptionBox,
  IconWrapper,
  BoxItem,
  TextItemLoc,
  Details,
  IconWrapperFavorite,
} from './AdvertListItem.styled';
import { Button } from '../../components/common/Button';
import { Category } from '../common/Category/Category';
import sprite from '../../assets/img/sprite.svg';
import { Modal } from '../Modal/Modal';
import { selectFavorites } from '../../store/favorites/favoritesSelectors';
import { addFavorite, delFavorite } from '../../store/favorites/favoritesSlice';
import ModalPortal from '../Modal/ModalPortal';
import { Flex } from '../common/Flex';
import { ModalContent } from '../Modal/ModalContent';

export const AdvertListItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isData, setIsData] = useState({});

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites?.some((item) => item._id === data._id);

  const stateFavorite = () => {
    dispatch(isFavorite ? delFavorite(data) : addFavorite(data));
  };

  const {
    name,
    price,
    rating,
    location,
    description,
    reviews,
    gallery,
    details,
  } = data;
  return (
    <Item>
      {gallery && gallery.length > 0 && <PrePhoto gallery={gallery[0]} />}
      <PreInfo>
        <PreHead>
          <Name>{name}</Name>
          <PriceBox>
            <Price>€ {parseFloat(price).toFixed(2)}</Price>
            <Favorite onClick={stateFavorite}>
              {isFavorite ? (
                <IconWrapperFavorite color="var(--button)" size="24px">
                  <use href={`${sprite}#icon-heart`} />
                </IconWrapperFavorite>
              ) : (
                <IconWrapperFavorite
                  // color="var(--button)"
                  size="24px"
                >
                  <use href={`${sprite}#icon-heart`} />
                </IconWrapperFavorite>
              )}
            </Favorite>
          </PriceBox>
        </PreHead>
        <RatingBox>
          <BoxItem>
            <IconWrapper>
              <use href={`${sprite}#icon-star`} />
            </IconWrapper>
            <TextItem>
              {rating}({reviews && reviews.length} Reviews)
            </TextItem>
          </BoxItem>
          <BoxItem>
            <IconWrapper>
              <use href={`${sprite}#icon-map`} />
            </IconWrapper>
            <TextItemLoc>{location}</TextItemLoc>
          </BoxItem>
        </RatingBox>
        <DescriptionBox>
          <Description>{description}</Description>
        </DescriptionBox>

        <Details>
          <Category details={details} />
        </Details>
        <Flex gap="20px">
          <Button onClick={handleOpenModal}>Show more</Button>
          <div>
            <Button type="button" onClick={openModal}>
              Modal
            </Button>
            {ReactDOM.createPortal(
              <ModalPortal isOpen={isOpen} onClose={closeModal}>
                <ModalContent data={data} />
              </ModalPortal>,
              document.getElementById('modal-root')
            )}
          </div>
        </Flex>
      </PreInfo>
      {isModalOpen && <Modal onClose={handleCloseModal} data={data} />}
    </Item>
  );
};
