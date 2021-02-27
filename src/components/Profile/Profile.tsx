import React, { useContext } from 'react';
import style from '../../styles/pages/Profile.module.css'
import {ChallengesConext} from '../../contexts/ChallengesContext'

export function Profile() {
  const {level} = useContext(ChallengesConext)

  return (
      <div className={style.profileContainer}>
        <img src="https://github.com/diego3g.png" alt="Davi Souza"/>
          <div>
            <strong>Davi Souza</strong>
            <p>
              <img src="icons/level.svg" alt="Icon Level"/>
              Level {level}
            </p>
          </div>
      </div>
    );
}
