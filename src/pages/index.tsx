import Head from 'next/head'
import {GetServerSideProps} from 'next'

import {ExperienceBar} from '../components/Bar/ExperienceBar'
import {CompleteChallenges} from '../components/CompleteChallenges/CompleteChallenges'
import {Countdown} from '../components/Countdown/Countdown'
import {Profile} from '../components/Profile/Profile'
import {ChallengeBox} from '../components/ChallengeBox/ChallengeBox'
import {ChallengesProvider} from '../contexts/ChallengesContext'
import {CountdownProvider} from '../contexts/CountdownContext'

import style from '../styles/pages/Home.module.css'

interface HomeProps{
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}

export default function Home(props:HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={style.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>
        <ExperienceBar/>

        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompleteChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) =>{
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props:{
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}