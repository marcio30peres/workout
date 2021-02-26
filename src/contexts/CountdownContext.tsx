import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number
    seconds: number
    isActive: boolean
    hasFinished: boolean
    resetCountdown: () => void
    startCountdown: () => void
}

interface CountdownContextProps {
    children: ReactNode
}

let countDownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownContextProps) {
    const { startNewChallenge } = useContext(ChallengesContext)
    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setTime(25 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setIsActive(false)
            setHasFinished(true)
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                isActive,
                hasFinished,
                resetCountdown,
                startCountdown
            }}
        >
            {children}
        </CountdownContext.Provider>
    )
}