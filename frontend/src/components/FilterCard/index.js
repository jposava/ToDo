import React from 'react';
import * as S from './style';

function FilterCard({title, actived}) {
  return (
    <S.Container actived = {actived}>
        <h2>Y</h2>
        <span>{title}</span>
    </S.Container>
  );
}

export default FilterCard;
;