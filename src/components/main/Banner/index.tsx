import React, { Suspense, lazy } from 'react';
import * as S from './style';
import banner_gif from '../../../assets/CSutdybanner.gif';
const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.BannerImg src={banner_gif} alt="배너 이미지" />
    </S.BannerWrapper>
  );
};

export default Banner;
