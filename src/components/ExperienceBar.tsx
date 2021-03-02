import { useContext, useEffect } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel, previousLevelExperience } = useContext(ChallengesContext)
    const percentToNextLevel = Math.round(currentExperience / experienceToNextLevel * 100)

    return (
        <div className={styles.experienceBarContainer}>
            <span>{previousLevelExperience} xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}></div>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </div>
    )
}