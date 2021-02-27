import React, { useContext } from 'react';
import style from '../../styles/pages/ChallengeBox.module.css'
import {ChallengesConext} from '../../contexts/ChallengesContext'
import {CountdownConext} from '../../contexts/CountdownContext'

export function ChallengeBox() {
  const {activeChallenge,resetChallenge,completeChallenge} = useContext(ChallengesConext)
  const {resetCountdown} = useContext(CountdownConext)
   
  function handleChallengeSucceeded(){
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountdown()
  }

  return (
      <div className={style.challengeBoxContainer}>
        { activeChallenge ? (
          <div className={style.challengActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`}/>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button
                type="button"
                className={style.challengeFailedButton}
                onClick={handleChallengeFailed}
              >
                Falhei
              </button>
              <button
                type="button"
                className={style.challengeSucceededButton}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </div>
        ):(
          <div className={style.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
              <p>
                <img src="icons/level-up.svg" alt="Level up"/>
                Avance de level completando desafios.
              </p>
          </div>
        )}
        
      </div>
    );
}
