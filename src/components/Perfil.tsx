import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Perfil.module.css'

export function Perfil() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.perfilContainer}>
            <img src="https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1" alt="" />
            <div>
                <strong>
                    Work Out
                </strong>
                <span>
                    <img src="icons/level.svg" alt="" />
                    Nível {level}
                </span>
            </div>
        </div>
    )
}