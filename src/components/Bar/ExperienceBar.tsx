import React, { useContext } from 'react';
import style from '../../styles/components/ExperienceBar.module.css'
import {ChallengesConext} from '../../contexts/ChallengesContext'

export function ExperienceBar() {
  const {currentExperience,experienceToNextLevel} = useContext(ChallengesConext)
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
      <header className={style.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width:`${percentToNextLevel}%`}}/>
          <span 
            className={style.currentExperience} 
            style={{ left:`${percentToNextLevel}%`}}>
            {currentExperience}
              xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </header>
    );
}
