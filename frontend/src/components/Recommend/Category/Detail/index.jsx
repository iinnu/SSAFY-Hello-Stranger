import styled from '@emotion/styled';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import Title from './Title';
import CategoryStoreList from './List/StoreList';
import StoreMap from './Map/StoreMap';

const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    height: 100%;
    width: 100%;
    max-width: 500px;
    padding: 0;
    border-radius: 0;
  }
`;

const list = [
  {
    foodId: '1',
    foodName: '이태리 제면소',
    foodAddress: '대구 달성군 화원읍 비슬로 2528',
    foodLatitude: '35.8012585',
    foodLongtitude: '128.494283',
    foodTime: '매일 11:10 ~ 21:00',
  },
  {
    foodId: '2',
    foodName: '황장군',
    foodAddress: '대구 달성군 화원읍 비슬로 2530',
    foodLatitude: '35.8014342',
    foodLongtitude: '128.494651',
    foodTime: '매일 08:00 ~ 21:30',
  },
  {
    foodId: '3',
    foodName: '코스모스막창',
    foodAddress: '대구 달성군 화원읍 명천로 226',
    foodLatitude: '35.7993167',
    foodLongtitude: '128.493904',
    foodTime: '매일 15:30 ~ 00:30',
  },
  {
    foodId: '4',
    foodName: '투썸플레이스',
    foodAddress: '대구 달성군 화원읍 비슬로 2529',
    foodLatitude: '35.8019464',
    foodLongtitude: '128.494041',
    foodTime: '매일 08:30 ~ 00:30',
  },
  {
    foodId: '5',
    foodName: '이디야 커피',
    foodAddress: '대구 달성군 화원읍 비슬로 2503',
    foodLatitude: '35.8004907',
    foodLongtitude: '128.491525',
    foodTime: '매일 09:00 ~ 22:30',
  },
];

export default function CategoryDetail({ current, open, handleClose }) {
  const [isList, setIsList] = useState(true);

  const ToggleDrawer = () => {
    setIsList(true);
    handleClose();
  };

  const handleClick = () => {
    setIsList(!isList);
  };

  return (
    <CustomDrawer anchor="right" open={open} onClose={ToggleDrawer}>
      <Title
        title={
          current.foodCategory ? current.foodCategory : current.activityCategory
        }
        isList={isList}
        handleClick={handleClick}
        handleClose={ToggleDrawer}
      />
      {isList && <CategoryStoreList list={list} handleClick={handleClick} />}
      {!isList && <StoreMap list={list} />}
    </CustomDrawer>
  );
}
