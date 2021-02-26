import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Perfil.module.css'

export function Perfil() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.perfilContainer}>
            <img src="https://github.com/marcio30peres.png" alt="" />
            <div>
                <strong>
                    Márcio Luís
                </strong>
                <span>
                    <img src="icons/level.svg" alt="" />
                    Nível {level}
                </span>
            </div>
        </div>
    )
}