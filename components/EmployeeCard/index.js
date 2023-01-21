import styles from './EmployeeCard.module.css'

export default function EmployeeCard({
    name="n/a",
    role="n/a",
    bio="n/a",
}) {
    return(
        <div style={{width:'350px'}} className={`${styles.employeecard} ${styles.fadein__1000ms}`}>
            {
                name == "Alicia" ? <img src='portraits/alicia.jpg' className={`${styles.portrait} ${styles.hoveranimation}`}></img> :
                name == "Beatrice" ? <img src='portraits/beatrice.jpg' className={`${styles.portrait} ${styles.hoveranimation}`}></img> :
                name == "Chloe" ? <img src='portraits/chloe.jpg' className={`${styles.portrait} ${styles.hoveranimation}`}></img> :
                <></>
            }
            <h3 className={`${styles.name} ${styles.nomargin}`} style={{fontSize:'30px', margin:'0px'}}>{name}</h3>
            <p  className={`${styles.role} ${styles.nomargin}`} style={{fontSize:'20px', fontStyle:'italic'}}>{role}</p>
            <p className={styles.bio}>{bio}</p>
        </div>
    )
}