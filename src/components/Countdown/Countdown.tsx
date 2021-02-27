import React, { useContext, useEffect, useState } from 'react';
import style from '../../styles/pages/Countdown.module.css'
import {CountdownConext} from '../../contexts/CountdownContext'

export function Countdown() {
  const {
      minutes,
      second,
      hasFinished,
      isActive,
      resetCountdown,
      startCountdown
    } = useContext(CountdownConext)

  const [minutesLeft, minutesRigth] = String(minutes).padStart(2,'0').split('')
  const [secondLeft,   secondRigth] = String(second).padStart(2,'0').split('')

 
  return (
    <div>
        <div className={style.countdownContainer}>
          <div>
            <span>{minutesLeft}</span>
            <span>{minutesRigth}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRigth}</span>
          </div>
        </div>
        
        {hasFinished ? (
          <button 
            disabled
            className={style.countdownButton}
            >
            Ciclo encerrado
          </button>
        ) : (
          <>
           {isActive ?(
            <button 
              type="button" 
              className={`${style.countdownButton} ${style.countdownButtonActive}`}
              onClick={resetCountdown}
              >
              Abandonar ciclo
            </button>
          ):(
            <button 
              type="button" 
              className={style.countdownButton}
              onClick={startCountdown}
              >
                Iniciar um ciclo
            </button>
          )}
          </>
        )}
      </div>
    );
}
