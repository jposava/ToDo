import React from 'react';
import * as S from './style';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header({lateCount, clickNotification}) {
  return (
    <S.Container>
        <S.LeftSide>
            <img src={logo} alt="Logo"/>
        </S.LeftSide>
        <S.RightSide>
            <Link to="/">INÍCIO</Link>
            <span className="dividir"/>
            <Link to="/task">NOVA TAREFA</Link>
            <span className="dividir"/>
            <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
            {
              lateCount &&
              <>
              <span className="dividir"/>
              <button id="notification" onClick={clickNotification}>
                <img src={bell} alt="Notificação"/>
                <span>{lateCount}</span>
              </button>
              </>
            }
        </S.RightSide>          
    </S.Container>
  );
}

export default Header;
