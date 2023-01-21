import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link href='/' className={`${styles.h1}`}>Candy Land College</Link>
                <div className={styles.navbar}>
                    <Link href='/' className={`${styles.navbar__link}`}>Home</Link>
                    <Link href='/about' className={`${styles.navbar__link}`}>Meet the Team</Link>
                </div>
            </header>
        </>
    )
}