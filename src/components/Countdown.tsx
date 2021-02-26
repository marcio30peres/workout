import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const {
        minutes,
        seconds,
        isActive,
        hasFinished,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div className={styles.countdownContainer}>
            <div>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { isActive ? (
                <button
                    type='button'
                    onClick={resetCountdown}
                    className={styles.countdownButtonActive}
                >
                    Abandonar ciclo
                </button>
            ) : (
                    <>
                        {hasFinished ? (
                            <button
                                disabled
                                className={styles.countdownButton}
                            >
                                Ciclo encerrado
                            </button>

                        ) : (

                                <button
                                    type='button'
                                    onClick={startCountdown}
                                    className={styles.countdownButton}
                                >
                                    Iniciar um ciclo!
                                </button>
                            )}
                    </>
                )}

        </div>
    )
}