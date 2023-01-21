import styles from './SectionHeader.module.css'

export default function SectionHeader({
    content="none"
}) {
    return (
        <>
            <div className={`${styles.programs__header} ${styles.fadein__750ms}`}>
                <h2 className={`${styles.programs__header__text}`}>{
                    content
                }</h2>
            </div>
        </>
    )
}