import styles from './Card.module.css'

export default function Card({
    department="none",
    degree="none",
    colour="slategray",
    font="0",
    image="icon/default.png",
    name=""
}) {
    return(
        <div className={`${styles.card} ${styles.hoveranimation} ${styles.fadein__1500ms}`} style={{backgroundColor: 'var(--card-color)', fontSize: font}}>
            {
                department.toLowerCase() === "business" ?  <img src={'icon/business.png'} className={`${styles.icon}`}></img> :
                department.toLowerCase() === "computing" ?   <img src={'icon/computing.webp'} className={styles.icon}></img> :
                                         <img src={image} width='50'></img>
            }
            <h2 className={styles.degree}>{degree}</h2>
        </div>
    )
}