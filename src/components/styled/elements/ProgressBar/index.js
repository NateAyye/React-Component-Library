import React from 'react';
import * as S from './ProgressBar.styles'

const ProgressBar = ({ progress }) => {
  if ( typeof document !== 'undefined') {
    const number = document.getElementById('number');
    let counter = 0;
    setInterval(id => {
      if (counter === progress){
        clearInterval(id);
      } else {
      counter++;
      number.innerText = counter + '%'
      }
    }, 30)
  }
  return (
    <div>
      <S.Skill progress={ progress }>
        <S.Outer>
          <S.Inner>
            <S.Progress id={'number'}></S.Progress>
          </S.Inner>
        </S.Outer>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63"/>
              <stop offset="100%" stopColor="#673ab7"/>
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" strokeLinecap="round"/>
        </svg>
      </S.Skill>

    </div>
  );
};

export default ProgressBar;
