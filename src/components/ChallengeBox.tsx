import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { resetCountdown } = useContext(CountdownContext)
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type='button'
                            onClick={handleChallengeFailed}
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button
                            type='button'
                            onClick={handleChallengeSucceeded}
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Inicie um ciclo para <br />receber desafios</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="" />
                            Suba de nível <br /> completando desafios
                        </p>
                    </div>
                )
            }
        </div>
    )
}