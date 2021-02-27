import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesConext } from "./ChallengesContext";
let countdownTimeout: NodeJS.Timeout

interface CountdownConextData{
  minutes:number;
  second:number;
  hasFinished:boolean;
  isActive:boolean;
  resetCountdown:() => void;
  startCountdown:() => void;
}

interface CountdownProviderProps{
  children:ReactNode;
}

export const CountdownConext = createContext({} as CountdownConextData);

export function CountdownProvider({children}: CountdownProviderProps){
  const {startNewChallenge} = useContext(ChallengesConext)
  const [time,setTime] = useState(0.1 * 60);
  const [isActive,setIsActive] = useState(false);
  const [hasFinished,setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60)
  const second = time % 60

  function startCountdown(){
    setIsActive(true)
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(0.1 * 60)
  }

  useEffect(() =>{
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() =>{
        setTime(time -1)
      }, 1000)
    }else if(isActive && time === 0){
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  },[isActive,time])
  
  return(
    <CountdownConext.Provider
      value={{
        minutes,
        second,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown,
      }}>
        {children}
      </CountdownConext.Provider>
  )
}
