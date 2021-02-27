import React, { useContext } from 'react';
import {ChallengesConext} from '../../contexts/ChallengesContext'
import style from '../../styles/pages/CompleteCharllenges.module.css'

export function CompleteChallenges() {
  const { challengesCompleted} = useContext(ChallengesConext)
  return (
      <div className={style.CompleteCharllengesContainer}>
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
      </div>
    );
}
